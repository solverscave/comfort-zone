import React, { Component } from "react";
import axios from "axios";

import FundCard from "./../common/fundCard";
import { Link } from "react-router-dom";

const apiEndpoint = "http://localhost:5000/api/funds/isApproved/";

class Fundraising extends Component {
	state = {
		funds: []
	};

	async componentDidMount() {
		const data = await axios.get(apiEndpoint + "Approved");
		const funds = data.data;

		this.setState({ funds });
	}

	render() {
		const { funds } = this.state;

		return (
			<div>
				<div className="subheader-fundraising py-5 text-white">
					<div className="align-self-center justify-content-center text-center">
						<div>
							<h1>Your story starts here!</h1>
						</div>
						<div>
							<p>Find a cause you believe in and make good things happen</p>
						</div>
						<Link className="btn btn-czo" to="/fundraising/form">
							Get Funds
						</Link>
					</div>
				</div>

				<div className="container my-5">
					<div className="row">
						{funds.map(fund => (
							<div className="col-3 my-2" key={fund.id}>
								<FundCard
									_id={fund._id}
									title={fund.title}
									description={fund.description}
									imgUrl={fund.imageUrl}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Fundraising;
