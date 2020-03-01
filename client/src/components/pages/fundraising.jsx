import React, { Component } from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import FundCard from './../common/fundCard';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const apiEndpoint = 'http://localhost:5000/api/funds/isApproved/';

class Fundraising extends Component {
	state = {
		funds: [],
		user: {}
	};

	async componentDidMount() {
		const user = auth.getCurrentUser();
		this.setState({ user });

		const data = await axios.get(apiEndpoint + 'Approved');
		const funds = data.data;

		this.setState({ funds });
	}

	handleGetFund() {
		toast.error('Kindly login to add your funds!');
	}

	getButton() {
		if (!this.state.user)
			return (
				<button className='btn btn-czo' onClick={() => this.handleGetFund()}>
					Get Funds
				</button>
			);
		else if (this.state.user)
			return (
				<Link className='btn btn-czo' to='/fundraising/form'>
					Get Funds
				</Link>
			);
	}

	render() {
		const { funds } = this.state;

		return (
			<div>
				<ToastContainer />
				<div className='subheader-fundraising py-5 text-white'>
					<div className='align-self-center justify-content-center text-center'>
						<div>
							<h1>Your story starts here!</h1>
						</div>
						<div>
							<p>Find a cause you believe in and make good things happen</p>
						</div>
						{this.getButton()}
					</div>
				</div>

				<div className='container my-5'>
					<div className='row'>
						{funds.map(fund => (
							<div className='col-3 my-2' key={fund.id}>
								<FundCard
									_id={fund._id}
									title={fund.title}
									description={fund.description}
									imgUrl={fund.imageUrl}
									requiredAmount={fund.requiredAmount}
									raisedAmount={fund.raisedAmount}
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
