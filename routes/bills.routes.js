const express = require('express');
const Bills = require('../models/bills.models');

const router = express.Router();

//ADMIN GETS ALL BILLS
router.get('/', async (req, res) => {
  const bills = await Bills.find()
    .sort('userMembershipNumber')
    .sort('-dateOfIssue');
  if (!bills.length) res.json('No bill found!');
  else res.json(bills);
});

//MEMBER GETS HIS BILL
router.get('/:id', async (req, res) =>
  res.json(await Bills.find({ userId: req.params.id }).sort('-dueDate'))
);

router.get('/id/:id', async (req, res) =>
  res.json(await Bills.find({ _id: req.params.id }))
);

//POSTING A BILL
router.post('/', async (req, res) => {
  const bill = new Bills({
    dateOfIssue: req.body.dateOfIssue,
    dueDate: req.body.dueDate,
    arrearAmount: req.body.arrearAmount,
    waterCharges: req.body.waterCharges,
    conservancyCharges: req.body.conservancyCharges,
    streetLightCharges: req.body.streetLightCharges,
    roadMaintenanceCharges: req.body.roadMaintenanceCharges,
    graveyardCharges: req.body.graveyardCharges,
    electricityCharges: req.body.electricityCharges,
    totalAmount: req.body.totalAmount,
    dueAmount: req.body.dueAmount,
    userId: req.body.userId,
    userImage: req.body.userImage,
    userName: req.body.userName,
    userMembershipNumber: req.body.userMembershipNumber,
    isPaid: req.body.isPaid,
  });
  try {
    const savedBill = bill.save();
    res.json(savedBill);
  } catch (error) {
    res.json({ message: error });
  }
});

//GETTING THE DUE DATE BILLS
router.get('/isPaid/:isPaid', async (req, res) => {
  const bills = await Bills.find({ isPaid: req.params.isPaid });
  if (!bills.length) res.send('No such bill found!');
  else res.json(bills);
});

//ADMIN UPDATES THE BILL
router.put('/:id', async (req, res) => {
  const data = await Bills.findByIdAndUpdate(req.params.id, {
    $set: { ...req.body },
  }).sort('-date');
  res.json({
    message: data ? 'Successfully updated!' : "Wasn't able to update!",
  });
});

//

// Exporting router
module.exports = router;
