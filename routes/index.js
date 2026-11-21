
var express = require('express');
var router = express.Router();

// Display the StudySphere homepage
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'StudySphere'
  });
});

module.exports = router;
