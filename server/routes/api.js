const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const video = require('../model/videos');

const db = "mongodb://admin:admin@ds151141.mlab.com:51141/video_player";
mongoose.Promise = global.Promise;
mongoose.connect(db,function(err){

	if(!err){
		console.log("Successfully connected to database");

	}
	else{
		console.log("Error connecting to db"); 		
	}
});

router.get('/videos/:id',function(req, resp){
	video.findById(req.params.id)
		.exec(function(err,video){
			if(err){
				console.log("error loading videos");
			}
			else{
				resp.json(video);
			}
		})
});

module.exports = router;