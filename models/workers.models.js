const mongoose = require('mongoose');

const workerSchema = {
  name: String,
  mobile: String,
};

const Workers = (module.exports = mongoose.model('Workers', workerSchema));
