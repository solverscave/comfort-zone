const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate } = require('../models/user.models');
const express = require('express');
const router = express.Router();

//FINDING A SINGLE USER
router.get('/:id', async (req, res) => {
  res.json(await User.find({ _id: req.params.id }));
});

//REGISTERING A USER
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  //PICKING USER PROPERTIES FROM THE FORM
  user = new User(
    _.pick(req.body, [
      'name',
      'email',
      'password',
      'phone',
      'sector',
      'address',
      'role',
    ])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const userSaved = await user.save();
  res.json(userSaved);

  const token = user.generateAuthToken();
  res
    .header('x-auth-token', token)
    .header('access-control-expense-headers', 'x-auth-token')
    .send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;
