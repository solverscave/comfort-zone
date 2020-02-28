import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Joi from "joi-browser";
import Form from "./common/form";
import { Link } from "react-router-dom";
import axios from "axios";
const apiEndpoint = "http://localhost:5000/api/funds";

class FundForm extends Form {
	state = {
		data: { title: "", description: "" },
		errors: {}
	};

	schema = {
		title: Joi.string()
			.required()
			.min(15)
			.label("Title"),
		description: Joi.string()
			.required()
			.min(50)
			.label("Description"),
		status: Joi.string().label("Status")
	};

	doSubmit = async () => {
		const result = await axios.post(apiEndpoint, {
			...this.state.data
		});
		if (result) {
			toast.success("Your complain has been successfully received to us!");
		} else {
			toast.error("Oh something went wrong");
		}
	};

	render() {
		return (
			<div className="container my-5">
				<Link className="btn btn-cz mb-3" to="/fundraising">
					Go Back
				</Link>
				<h1>Form</h1>
				<ToastContainer />
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						{this.renderInput(
							"title",
							"Title",
							"text",
							"Enter the title of the complain"
						)}
						{this.renderTextArea(
							"description",
							"Description",
							"text",
							"Enter the description of the complain"
						)}
						<div className="row">
							<div className="col-3"></div>
						</div>
						{this.renderButton("Submit")}
					</form>
				</div>
			</div>
		);
	}
}

export default FundForm;
