var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.get('/open', async (req, res) => {
    try{
        var connection = await dbConnection();
        const
    }
});
