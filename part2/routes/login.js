var express = require('express');
var router = express.Router();
var dbConnection = require('../db');

router.post('/', async(req, res) => {
    const { username, password } = req.body;
    try{
        var connection = await dbConnection();
        var [rows] = await connection.query(
            `SELECT user_id, username, role, password_hash
             FROM Users
             WHERE username = ? LIMIT 1`,
             [username]
        );

        await connection.end();

        // The user does not exist in the database
        if(rows.length === 0){
            return res.status(401).json({ error: 'Invalid username or password'});
        }

        // Passwords do not match
        var user = rows[0];
        if(user.password_hash !== password){
            return res.status(401).json({ error: 'Invalid username or password'});
        }
        
        return res.status(200).json({ username: user.username, role: user.role});
    } catch(err){
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
