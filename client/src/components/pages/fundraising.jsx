import React, { Component } from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import FundCard from './../common/fundCard';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import educationalFunds from '../../assets/icons/educational-funds.svg';
import medicalFunds from '../../assets/icons/medical-funds.svg';
import memorialFunds from '../../assets/icons/memorial-funds.svg';
import personalFunds from '../../assets/icons/personal-funds.svg';

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
				<button className='btn btn-cz' onClick={() => this.handleGetFund()}>
					Get Funds
				</button>
			);
		else if (this.state.user)
			return (
				<Link className='btn btn-cz' to='/fundraising/form'>
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

				<div className='container my-3'>
					<div className='row ml-3 mb-3'>
						<img src={educationalFunds} alt='' />
						<h3 className='ml-1 mt-2 align-self-center justify-content-center text-center'>
							Educational
						</h3>
					</div>
					<div className='row ml-3 mb-3'>
						<img src={medicalFunds} alt='' />
						<h3 className='ml-1 mt-2 align-self-center justify-content-center text-center'>
							Medical
						</h3>
					</div>
					<div className='row ml-3 mb-3'>
						<img src={memorialFunds} alt='' />
						<h3 className='ml-1 mt-2 align-self-center justify-content-center text-center'>
							Memorial
						</h3>
					</div>
					<div className='row ml-3 mb-3'>
						<img src={personalFunds} alt='' />
						<h3 className='ml-1 mt-2 align-self-center justify-content-center text-center'>
							Personal
						</h3>
					</div>
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
