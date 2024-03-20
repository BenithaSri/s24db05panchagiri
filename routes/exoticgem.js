var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('exoticgem', { title: 'Search Result for Exotic Gems' });
});

module.exports = router;
