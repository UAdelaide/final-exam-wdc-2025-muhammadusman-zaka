var express = require('express');
var router = express.Router();

router.post('/logout', (req,res) => {
    req.session.destroy(() => {
        res.status(200).json({})
    })
})