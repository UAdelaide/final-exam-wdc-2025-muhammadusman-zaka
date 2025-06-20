var express = require('express');
var router = express.Router();

router.get('/me', (req, res) => {
    console.log('Current session:', req.session);
    if(!req.session || !req.session.user_id){
        return res.status(401).json({ error: 'Not authenticated' });
    }

    res.status(200).json({
        user_id: req.session.user_id,
        username: req.session.username,
        role: req.session.role
    });
});

router.post('/login', async(req, res) => {
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
        req.session.user_id = user.user_id;
        req.session.username = user.username;
        req.session.role = user.role;

        return res.status(200).json({ username: user.username, role: user.role});
    } catch(err){
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
