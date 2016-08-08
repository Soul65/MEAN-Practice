var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('index.html', { root: path.join(__dirname, '../') });
});

/* GET eventlist page.*/ 
/* router.get('/eventlist', function(req, res) {
    var db = req.db;
    var collection = db.get('eventcollection');
    collection.find({},{},function(e,docs){
        /*res.render('eventlist', {
            "eventlist" : docs
        });
		res.json(events)
    });
}); */ 

/* GET Eventelist page to angularJS page. 
router.get('/Bootstrap/index', function(req, res) {
    var db = req.db;
    var collection = db.get('eventcollection');
    collection.find({},{},function(e,docs){
        res.render('eventlist', {
            "eventlist" : docs
        });
    });
});*/

/* GET New Event page. */
router.get('/newevent', function(req, res) {
    res.render('newevent', { title: 'Add New event' });
});

/* POST to Add Event Service */
router.post('/addevent', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
	var eventId = req.body.eventid;
    var eventName = req.body.eventname;
    var eventEmail = req.body.eventmail;

    // Set our collection
    var collection = db.get('eventcollection');

    // Submit to the DB
    collection.insert({
		"eventid" : eventId,
        "eventname" : eventName,
        "eventmail" : eventEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("eventlist");
        }
    });
});

/*Got a request*/
/* app.get('/eventlist', function (req, res)
{
	console.log('I received a GET request');
	eventcollection.find({}, function(err,events){
		if(!err)
		{
				res.json(events);
		}
	});
}); */
module.exports = router;