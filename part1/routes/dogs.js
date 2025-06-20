var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/', async(req, res) => {
    try{
        var connection = await dbConnection();
        var [rows] = await connection.query(
            `SELECT d.name AS dog_name, d.size, u.username AS owner_username
             FROM Dogs d
             Join Users u on d.owner_id = u.user_id`
        );
        await connection.end();
        res.sendStatus(200).json(rows);
    } catch(err){
        res.sendStatus(500).json({ error: err.message });
    }
});
