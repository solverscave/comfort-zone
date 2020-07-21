const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User } = require('../models/user.models');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({
    membershipNumber: req.body.membershipNumber,
  });
  if (!user)
    return res.status(400).send('Invalid membershipNumber or password');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send('Invalid membershipNumber or password');

  const token = user.generateAuthToken();
  res.send(token);
});

function validate(req) {
  const schema = {
    membershipNumber: Joi.string().required(),
    password: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(req, schema);
}

module.exports = router;
