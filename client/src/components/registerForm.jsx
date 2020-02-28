import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import axios from "axios";
const apiEndpoint = "http://localhost:5000/api/users/";

class RegisterForm extends Form {
	state = {
		data: { email: "", password: "", name: "" },
		errors: {}
	};

	schema = {
		email: Joi.string()
			.required()
			.email()
			.label("Email"),
		password: Joi.string()
			.required()
			.min(8)
			.label("Password"),
		name: Joi.string()
			.required()
			.min(5)
			.label("Name")
	};

	doSubmit = async () => {
		const result = await axios.post(apiEndpoint, {
			...this.state.data
		});
		if (result) {
			toast.success(
				"You are successfully registered, go to login page to sign in."
			);
		} else {
			toast.error("Oh something went wrong");
		}
		const data = { email: "", password: "", name: "" };
		this.setState({ data });
	};

	render() {
		return (
			<div className="container my-5">
				<ToastContainer />
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Email", "email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderInput("name", "Name")}
					{this.renderButton("Register")}
				</form>
			</div>
		);
	}
}

export default RegisterForm;
