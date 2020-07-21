// Importing all packages
const mongoose = require('mongoose');
const Joi = require('Joi');

// Users schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  membershipNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).required(),
    membershipNumber: Joi.string().required(),
    password: Joi.string().min(8).required(),
    phone: Joi.number().min(11).max(11).required(),
    sector: Joi.string().required(),
    role: Joi.string().required(),
  };

  return Joi.validate(user, schema);
}

const Users = (module.exports = mongoose.model('Users', userSchema));

module.exports.validateUser = validateUser;
