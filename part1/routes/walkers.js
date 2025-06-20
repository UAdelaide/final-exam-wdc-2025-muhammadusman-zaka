var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/summary', async (req, res) => {
    try{
        var connection = dbConnection();
        const [rows]
    }
})