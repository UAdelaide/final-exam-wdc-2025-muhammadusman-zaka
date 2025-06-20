var express = require('express');
var router = express.Router();

router.post('/', (req,res) => {
    req.session.destroy((err) => {
        if(err) return res.status(500).json
    });

});

module.exports = router;