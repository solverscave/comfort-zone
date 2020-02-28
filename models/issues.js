// Importing all packages
const mongoose = require("mongoose");

// Setting mongoose schema
const issueSchema = {
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	category: {
		type: String,
		require: true
	},
	comments: {
		type: Array,
		require: false,
		description: {
			type: String,
			require: false
		}
	}
};

// Exporting issues
const Issues = (module.exports = mongoose.model("Issues", issueSchema));
