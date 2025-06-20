var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.post('/', async(req, res) => {
    const { username, password } = req.body;
    try{
        var connection = await dbConnection();
        var [rows] = await connection.query(
            
        )
    }

});