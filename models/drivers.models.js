const mongoose = require('mongoose');

const driverSchema = {
  name: String,
  mobile: String,
};

const Drivers = (module.exports = mongoose.model('Drivers', driverSchema));
