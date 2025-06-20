var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/', async(req, res) => {
    try{
        var owner = req.query.owner;
        var connection = await dbConnection();

        let sql = `
        SELECT d.dog_id, d.name AS dog_name, d.size, u.username AS owner_username
        FROM Dogs d
        JOIN Users u on 
        `
        await connection.end();
        res.status(200).json(rows);

    } catch(err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

