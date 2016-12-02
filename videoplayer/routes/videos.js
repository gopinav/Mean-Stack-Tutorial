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
    newVideo.save(function(err, insertedVideo){
        if(err){
            res.send("Error saving video");
        }else{
            res.json(insertedVideo);
        }
    });
})

router.put('/video/:id', function(req, res, next){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }
    )
})

router.delete('/video/:id', function(req, res, next){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            res.json(deletedVideo);
        }
    })
})

module.exports = router;