// Importing all packages
const mongoose = require('mongoose');
const Joi = require('Joi');
const { join } = require('lodash');

// Setting the schema
const complainSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    required: false,
  },
  userImage: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
});

// Validating schema
function validateComplain(complain) {
  const schema = {
    title: Joi.string().min(15).required(),
    description: Joi.string().min(50).required(),
    status: Joi.string(),
    userId: Joi.string(),
    userName: Joi.string(),
    userImage: Joi.string(),
    date: Joi.date(),
  };
  return Joi.validate(complain, schema);
}

const Complain = (module.exports = mongoose.model('Complains', complainSchema));

// Exporting validations
module.exports.validateComplain = validateComplain;
