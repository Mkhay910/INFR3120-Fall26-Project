var express = require('express');
var router = express.Router();

// Display all reservations
router.get('/', function(req, res, next) {
  res.render('reservations/index', {
    title: 'StudySphere | Reservations'
  });
});

// Display the new reservation form
router.get('/new', function(req, res, next) {
  res.render('reservations/new', {
    title: 'StudySphere | Book a Room'
  });
});

module.exports = router;