var express = require('express');
var router = express.Router();

router.post('/logout', (req,res) => {
    req.session.destroy(() => {
        res.status(200).json({ message: 'Logged Out'});
    });

    window.location.href = 'index.html';
});

module.exports = router;