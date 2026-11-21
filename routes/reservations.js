var express = require('express');
var router = express.Router();
var Reservation = require('../models/Reservation');

router.get('/', async function(req, res, next) {
  try {
    var reservations = await Reservation.find().sort({ date: 1, startTime: 1 });
    res.render('reservations/index', {
      title: 'StudySphere | Reservations',
      reservations: reservations
    });
  } catch (err) {
    next(err);
  }
});

router.get('/new', function(req, res) {
  res.render('reservations/new', {
    title: 'StudySphere | Book a Room'
  });
});

router.post('/', async function(req, res, next) {
  try {
    var reservation = new Reservation({
      studentName: req.body.studentName,
      room: req.body.room,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    });

    await reservation.save();
    res.redirect('/reservations');
  } catch (err) {
    next(err);
  }
});


router.post('/:id/delete', async function(req, res, next) {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.redirect('/reservations');
  } catch (err) {
    next(err);
  }
});


router.get('/:id/edit', async function(req, res, next) {
  try {
    var reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.redirect('/reservations');
    res.render('reservations/edit', {
      title: 'StudySphere | Edit Reservation',
      reservation: reservation
    });
  } catch (err) {
    next(err);
  }
});

router.post('/:id/edit', async function(req, res, next) {
  try {
    await Reservation.findByIdAndUpdate(req.params.id, {
      studentName: req.body.studentName,
      room: req.body.room,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime
    }, { runValidators: true });
    res.redirect('/reservations');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
