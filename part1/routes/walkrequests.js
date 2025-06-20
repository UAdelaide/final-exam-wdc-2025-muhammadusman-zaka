var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/open', async (req, res) => {
    try{
        var connection = await dbConnection();
        var [rows] = await connection.query(
            `SELECT wr.request_id, d.name AS dog_name, wr.requested_time, wr.duration_minutes, wr.location, u.username AS owner_username
             FROM WalkRequests wr
             JOIN Dogs d ON wr.dog_id = d.dog_id
             JOIN Users u ON d.owner_id = u.user_id
             WHERE wr.status = 'open'`
        );
        await connection.end();
        res.status(200).json(rows);
    } catch(err){
        res.sendStatus(500).json({ error: err.message });
    }
});

module.exports = router;
