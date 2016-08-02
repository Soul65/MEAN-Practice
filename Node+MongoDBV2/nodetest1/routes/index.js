var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

/* GET Employeelist page. */
router.get('/employeelist', function(req, res) {
    var db = req.db;
    var collection = db.get('employeecollection');
    collection.find({},{},function(e,docs){
        res.render('employeelist', {
            "employeelist" : docs
        });
    });
});

/* GET Employeelist page.*/ 
router.get('/eventlist', function(req, res) {
    var db = req.db;
    var collection = db.get('eventcollection');
    collection.find({},{},function(e,docs){
        /*res.render('eventlist', {
            "eventlist" : docs
        });*/
		res.json(events)
    });
}); 

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

/* GET New User page. */
router.get('/newuser', function(req, res) {
    res.render('newuser', { title: 'Add New User' });
});

/* GET New Employee page. */
router.get('/newemployee', function(req, res) {
    res.render('newemployee', { title: 'Add New employee' });
});

/* GET New Event page. */
router.get('/newevent', function(req, res) {
    res.render('newevent', { title: 'Add New event' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

/* POST to Add Employee Service */
router.post('/addemployee', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
	var employeeId = req.body.employeeid;
    var employeeName = req.body.employeename;
    var employeeEmail = req.body.employeeemail;

    // Set our collection
    var collection = db.get('employeecollection');

    // Submit to the DB
    collection.insert({
		"employeeid" : employeeId,
        "employeename" : employeeName,
        "employeemail" : employeeEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("employeelist");
        }
    });
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
app.get('/eventlist', function (req, res)
{
	console.log('I received a GET request');
	eventcollection.find({}, function(err,events){
		if(!err)
		{
				res.json(events);
		}
	});
});
module.exports = router;