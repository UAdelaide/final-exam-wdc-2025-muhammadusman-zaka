var express = require('express');
var router = express.Router();

router.post('/', (req,res) => {
    req.session.destroy((err) => {
        res.status(200).json({ message: 'Logged Out'});
    });

});

module.exports = router;