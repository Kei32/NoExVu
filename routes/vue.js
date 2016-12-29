var express = require('express');
var router = express.Router();

/* GET vue listing. */
router.get('/', function(req, res, next) {
  res.render('vue', { title: 'Vue.js' });
});

module.exports = router;
