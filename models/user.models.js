const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  membershipNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  phone: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    default: 'http://localhost:3000/uploads/avatar.jpg',
  },
  isAdmin: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
    },
    config.get('jwtPrivateKey')
  );

  return token;
};

const User = mongoose.model('User', userSchema);
function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    membershipNumber: Joi.string().required(),
    password: Joi.string().min(5).max(255).required(),
    phone: Joi.string().min(11).required(),
    address: Joi.string().required(),
    role: Joi.string().required(),
    imageUrl: Joi.string().required(),
  };
  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
