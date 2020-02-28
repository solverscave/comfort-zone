// Importing all packages
const mongoose = require("mongoose");

// Funds schema
const fundSchema = mongoose.Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		require: true
	},
	category: {
		type: String,
		require: true
	},
	requireAmount: {
		type: Number,
		require: true
	},
	raisedAmount: {
		type: Number,
		require: true
	},
	remainingAmount: {
		type: Number,
		require: true
	},
	imageUrl: {
		type: String,
		require: true
	},
	isApproved: {
		type: String,
		require: true
	}
});

// Exporting funds
const Funds = (module.exports = mongoose.model("Funds", fundSchema));
