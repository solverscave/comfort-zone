// Importing all packages
const express = require('express');
const Bills = require('../models/bills');

// Setting the router
const router = express.Router();

// Getting all bills
router.get('/', async (req, res) => await res.json(await Bills.find({})));

// Exporting router
module.exports = router;
