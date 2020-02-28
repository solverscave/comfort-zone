// Importing all packages
const mongoose = require("mongoose");
const Joi = require("Joi");

// Ads schema
const adSchema = mongoose.Schema({
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
	imageUrl: {
		type: String,
		require: true
	},
	requiredAmount: {
		type: Number,
		require: true
	},
	condition: {
		type: String,
		require: true
	}
});

// Validation function
function validateAd(ad) {
	const schema = {
		title: Joi.string()
			.min(10)
			.required(),
		description: Joi.string()
			.min(50)
			.required(),
		requiredAmount: Joi.number()
			.min(1)
			.required(),
		condition: Joi.required()
	};
	return Joi.validate(ad, schema);
}

// Exporting ads
const Ads = (module.exports = mongoose.model("Ads", adSchema));

// Exporting validation function
module.exports.validateAd = validateAd;
