var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/summary', async (req, res) => {
    try{
        var connection = dbConnection();
        const [rows] = await connection.query(
            `SELECT u.username AS walker_username,
                    COUNT(wr.rating) AS total_ratings,
                    AVG(wr.rating) AS average_rating,
                    SUM(CASE WHEN wreq.status = 'completed' THEN 1 ELSE 0 END) AS completed_walks`

        );
    }
})