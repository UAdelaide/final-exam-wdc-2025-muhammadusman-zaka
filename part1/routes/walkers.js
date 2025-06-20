var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/summary', async (req, res) => {
    try{
        var connection = dbConnection();
        const [rows] = await connection.query(
            `SELECT u.username AS walker_username,
                    COUNT(wr.rating) AS total_ratings`
                    AudioProcessingEvent()
        );
    }
})