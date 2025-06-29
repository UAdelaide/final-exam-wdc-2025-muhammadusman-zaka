var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/summary', async (req, res) => {
    try{
        var connection = await dbConnection();
        const [rows] = await connection.query(
            `SELECT u.username AS walker_username,
                    COUNT(wr.rating) AS total_ratings,
                    ROUND(AVG(wr.rating), 1) AS average_rating,
                    SUM(CASE WHEN wreq.status = 'completed' THEN 1 ELSE 0 END) AS completed_walks
            FROM Users u
            LEFT JOIN WalkRatings wr ON u.user_id = wr.walker_id
            LEFT JOIN WalkRequests wreq ON wreq.request_id = wr.request_id
            WHERE u.role = 'walker'
            GROUP BY u.username`
        );
        await connection.end();
        res.status(200).json(rows);
    } catch(err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
