const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const videoschema = new Schema({
	title: String,
	url: String,
	description: String
});

module.exports = mongoose.model('video',videoschema,'videos');