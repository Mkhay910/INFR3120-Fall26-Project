var mongoose = require('mongoose');

var reservationSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    trim: true
  },
  room: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);
