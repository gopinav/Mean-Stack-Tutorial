var express = require('express');
var router = express.Router();

router.get('/videos', function(req, res, next){
    res.send("Videos View");
})

module.exports = router;