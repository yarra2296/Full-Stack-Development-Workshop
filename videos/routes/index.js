var express = require('express');
var router = express.Router();

var monk = require("monk");
var db = monk("localhost:27017/vidzy");

/* GET home page. */
router.get('/api/videos', function(req, res, next) {
  var collection = db.get('videos');
  collection.find({}, function(err, videos) {
    if (err) throw err;
    res.json(videos);
  })
});


module.exports = router;
