// Importing all packages
const express = require("express");
const Funds = require("../../models/funds");

// Setting the router
const router = express.Router();

// Getting all funds
router.get("/", async (req, res) => res.json(await Funds.find({})));

// Getting one user
router.get("/:id", async (req, res) =>
	res.json(await Funds.find({ _id: req.params.id }))
);

// Getting by category
router.get("/category/:category", async (req, res) => {
	// Getting a complain with the provided category
	const fund = await Funds.find({ category: req.params.category });
	// Checking if complain with provided id exists
	if (!fund.length) res.send("Alas! Complain with the given id was not found!");
	// Sending the complain to the client
	else res.json(fund);
});

// Getting by category
router.get("/isApproved/:isApproved", async (req, res) => {
	// Getting a complain with the provided category
	const fund = await Funds.find({ isApproved: req.params.isApproved });
	// Checking if complain with provided id exists
	if (!fund.length) res.send("Alas! Complain with the given id was not found!");
	// Sending the complain to the client
	else res.json(fund);
});

// Posting a single user
router.post("/", async (req, res) => {
	// Validating the complain
	// const result = validateComplain(req.body);

	//Checking for any validation errors
	// if (result.error) {
	// 	return res.status(400).send(result.error.details[0].message);
	// }
	// // If no error was found
	// else {
	const fund = await Funds.create({ ...req.body, isApproved: "Pending" });
	res.send(fund);
	// }
});

// Updating a single user
router.put("/:id", async (req, res) => {
	// Finding the user under the Id and updating the provided variables
	await Funds.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});

	const updatedFund = await Funds.findById(req.params.id);
	res.json(updatedFund);
});

// Exporting router
module.exports = router;
