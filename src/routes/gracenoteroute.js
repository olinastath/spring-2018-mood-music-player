var express = require('express');
var router = express.Router();

/*
module.exports = function(gracenote) {
    const db = process.env.MONGODB_URI || require('./config.js').mongoKey;
        var clientId = process.env.GN_CLIENT_ID || require('./config.js').gracenoteClientId;
        var clientTag = process.env.GN_TAG || require('./config.js').gracenoteTag;
        var userId = process.env.GN_USER_ID || require('./config.js').gracenoteUserId;
        var api = new gracenote(clientId,clientTag,userId);
*/
    
        /* Have to get the Artist, Album, and Track Name from Spotify WEB SDK */
        /*
        var artist = "Johnny Cash";
        var album = "American IV: The Man Comes Around";
        var track = "Hurt"
    
        api.searchTrack(artist, album, track, function(err, result) {
            // Search Result as array
            console.log(result[0].tracks[0]);
    
        }, {matchMode: gracenote.BEST_MATCH_ONLY});
};
*/
    

router.get('/mooddata', function(req, res){
    console.log(req.params);
    res.send('hello world');
});

module.exports = router;
