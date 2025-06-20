var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/', async(req, res) => {
    try{
        var connection = await dbConnection();
        var [rows] = await connection.query(
            `SELECT d.name AS dog_name, d.size, u.username AS owner_username`
        );
    }
});
