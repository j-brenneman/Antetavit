var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Store Page
router.get('/views/store', function (req, res, next) {
  res.render('store');
});
// About Page
router.get('/views/about', function (req, res, next) {
  res.render('about');
});


module.exports = router;
