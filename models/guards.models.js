const mongoose = require('mongoose');

const guardsSchema = {
  name: String,
  mobile: String,
};

const Guards = (module.exports = mongoose.model('Guards', guardsSchema));
