var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
	//console.log(req);
	
	var data = {};
	
	var response = {
	  request: "request",
	  success: false,
	  data: data
	};
	res.send(JSON.stringify(response));
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	
	var data = {};
	var response = {
	  request: "request",
	  success: false,
	  data: data
	};
	res.send(JSON.stringify(response));
});

router.post('/echo', function(req, res, next) {
	
	var data = {};
	var response = {
	  request: "request",
	  success: false,
	  data: data
	};
	res.send(JSON.stringify(req.body));
});

router.get('/echo', function(req, res, next) {
	
	var data = {};
	var response = {
	  request: "request",
	  success: false,
	  data: data
	};
	res.send(JSON.stringify(req.query));
});

module.exports = router;
