var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Video = require('../models/video');

var db = "mongodb://uservishwas:pwvishwas@ds113678.mlab.com:13678/videoplayer";
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/videos', function(req, res, next){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if(err){
            res.send("Error retrieving videos");
        }else{
            res.json(videos);
        }
    })
})

router.get('/videos/:id', function(req, res, next){
    console.log('Get request for a single video');
    Video.findById(req.params.id)
    .exec(function(err, videos){
        if(err){
            res.send("Error retrieving videos");
        }else{
            res.json(videos);
        }
    })
})

router.post('/video', function(req, res, next){
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, video){
        if(err){
            res.send("Error saving video");
        }else{
            res.json(video);
        }
    });
})

module.exports = router;