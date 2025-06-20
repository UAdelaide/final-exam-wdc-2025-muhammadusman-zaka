var express = require('express');
var router = express.Router();

router.get('/me', (req, res) => {
    if(!req.session || !req.session.user_id){
        return res.status(401).json({error:})
    }
})