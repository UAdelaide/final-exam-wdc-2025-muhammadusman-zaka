var express = require('express');
var router = express.Router();

router.post('/', (req,res) => {
    req.session.destroy((err) => {
        if(err) return res.status(500).json({ error: 'Failed to logout' });
        res.status(200).json({ message: ''})
    });

});

module.exports = router;