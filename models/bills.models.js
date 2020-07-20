const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
  dateOfIssue: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  arrearAmount: {
    type: Number,
    required: true,
  },
  waterCharges: {
    type: Number,
    required: true,
  },
  conservancyCharges: {
    type: Number,
    required: true,
  },
  streetLightCharges: {
    type: Number,
    required: true,
  },
  roadMaintenanceCharges: {
    type: Number,
    required: true,
  },
  graveyardCharges: {
    type: Number,
    required: true,
  },
  electricityCharges: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  dueAmount: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  isPaid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Bills', billSchema);
