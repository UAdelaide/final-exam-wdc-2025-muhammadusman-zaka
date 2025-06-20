var express = require('express');
var router = express.Router();

router.get('/me', (req, res) => {
    if(!req.session || !req.session.user_id){
        return res.status(401).json({ error: 'Not authenticated' });
    }

    res.status(200).json({
        user_id: req.session.user_id,
        username: req.session.username,
        role: req.session.role
    });
});

module.exports = router;
