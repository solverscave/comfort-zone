// Importing all packages
const express = require("express");
const Users = require("../../models/users");
const { validateUser } = require("../../models/users");

// Setting the router
const router = express.Router();

// Finding all users
router.get("/", async (req, res) => {
	// Getting all users
	const users = await Users.find({});
	// Checking if no user exists
	if (!users.length) res.status(400).send("No user was found in the database!");
	// If users exit, sending that users
	else res.json(users);
});

// Finding user by id
router.get("/id/:id", async (req, res) => {
	// Getting a user
	const user = await Users.find({ _id: req.params.id });
	// If no user was found under this id
	if (!user.length)
		res.status(400).send("Alas! No user was found with this id!");
	// Send the user if the user exits under this id
	else res.json(user);
});

// Finding user by type
router.get("/type/:type", async (req, res) => {
	// Declaring a type variable
	const type = req.params.type;
	// Getting all users under the required type
	const users = await Users.find({ type });
	// If no users exits under the required type
	if (!users.length)
		res.status(400).send("Alas! There are no users exits under this type!");
	// If users exits under the required type
	else res.json(users);
});

// Posting a single user
router.post("/", async (req, res) => {
	// Validating the ad
	const result = validateUser(req.body);

	//Checking for any validation errors
	if (result.error) {
		return res.status(400).send(result.error.details[0].message);
	}
	// If no error was found
	else {
		const user = await Users.create({ ...req.body });
		res.send(user);
	}
});

// Updating a single user
router.put("/id/:id", async (req, res) => {
	// Finding the user under the Id and updating the provided variables
	const user = await Users.findByIdAndUpdate(req.params.id, {
		$set: { ...req.body }
	});
	res.json({
		message: user ? "Successfully updated!" : "Wasn't able to update!"
	});
});

// Deleting a user by ID
router.delete("/id/:id", async (req, res) => {
	const data = await Users.findByIdAndDelete(req.params.id);

	res.json({
		message: data ? "Successfully deleted!" : "Wasn't able to delete!"
	});
});

// Exporting router
module.exports = router;
