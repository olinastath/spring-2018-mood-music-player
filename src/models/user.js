const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true}, //hash created from password
	name: {type: String},
	dob: {type: Date},
	email: {type: String},
	spotify_id: {type: String},
	uri: {type: String},
	account_type: {type: String},	// premium or free
	last_updated: {type: Date},		// in order to periodically update?
	saved_songs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
	playlists: [{type: mongoose.Schema.Types.ObjectId, ref: 'Playlist'}]
});

User.plugin(passportLocalMongoose);
User.plugin(URLSlugs('username'));

module.exports = mongoose.model('User', User);
