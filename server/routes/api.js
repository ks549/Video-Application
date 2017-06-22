const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const videos = require('../model/videos');

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

router.get('/videos',function(req, resp){
	videos.find({})
		.exec(function(err,videos){
			if(err){
				console.log("error loading videos");
			}
			else{
				resp.json(videos);
			}
		})
});

module.exports = router;