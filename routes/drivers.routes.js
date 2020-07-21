const auth = require('../middleware/auth');
const express = require('express');

const Drivers = require('../models/drivers.models');

const router = express.Router();

router.get('/', async (req, res) => {
  const drivers = await Drivers.find({}).sort('-name');
  if (!drivers.length) {
    res.json('No driver was found!');
  } else res.json(drivers);
});

// router.get('/:id', async (req, res) => {
//   res.json(await Issues.find({ _id: req.params.id }));
// });

// // Finding ad by category
// router.get('/category/:category', async (req, res) => {
//   // Declaring a category variable
//   const category = req.params.category;
//   // Getting all issues under the required category
//   const issues = await Issues.find({ category });
//   // If no issues exits under the required category
//   if (!issues.length)
//     res
//       .status(400)
//       .send('Alas! There are no issues exits under this category!');
//   // If issues exits under the required category
//   else res.json(issues);
// });

// // Posting an ad
// router.post('/', async (req, res) => {
//   const data = await Issues.create({ ...req.body });
//   res.json({
//     data,
//     message: data ? 'Successfully Posted' : "Wasn't able to post!",
//   });
// });

// router.put('/:id', auth, async (req, res) => {
//   const data = await Issues.findByIdAndUpdate(req.params.id, {
//     $set: { ...req.body },
//   });
//   res.json({
//     message: data ? 'Successfully updated!' : "Wasn't able to update!",
//   });
// });

// router.put('/comment/:id', auth, async (req, res) => {
//   const data = await Issues.findOne({ _id: req.params.id });

//   const comments = data.comments;

//   data.comments = [req.body, ...comments];

//   await data.save();

//   res.json(newComment);
// });

// router.delete('/:id', async (req, res) => {
//   const data = await Driver.findOne({ _id: req.params.id });
//   res.send(data);
// });

// Deleting a issue by ID
router.delete('/:id', async (req, res) => {
  const data = await Drivers.findByIdAndDelete(req.params.id);
  res.json({
    message: data ? 'Successfully deleted!' : "Wasn't able to delete!",
  });
});

// Exporting router
module.exports = router;
