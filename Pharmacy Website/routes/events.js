var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET events listing. */
router.get('/', function(req, res, next) {
	var MongoClient = mongodb.MongoClient;
	var url = "mongodb://localhost:27017/test";

	// Use connect method to connect to the Server
	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log('Unable to connect to the mongoDB server. Error:', err);
		} else {
			console.log('Connection established to', url);

			var collection = db.collection("events");
			collection.find().toArray(function (err, result) {
				if (err) {
					console.log(err);
				} else if (result.length) {
					console.log('Found:', result);
				} else {
					console.log('No document(s) found with defined "find" criteria!');
				}
				
				res.send(result);
				
				//Close connection				
				db.close();
			});
		}
	});	
});

module.exports = router;