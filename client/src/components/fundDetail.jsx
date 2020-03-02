import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import thousandRupees from '../assets/img/PKR_Rs_1000.jpg';
import Funk from '../../src/components/pages/funk';

const apiEndpoint = 'http://localhost:5000/api/funds/';

class FundDetail extends Component {
	state = {
		fund: {}
	};

	async componentDidMount() {
		const { data } = await axios.get(
			apiEndpoint + '/' + this.props.match.params.id
		);

		const fund = data[0];
		this.setState({ fund });
	}

	renderAmount = fund => {
		if (fund.requiredAmount === 1000)
			return (
				<h3>
					<img src={thousandRupees} alt='thousandRupees' width='260px' /> x 1
				</h3>
			);
	};
	render() {
		const { fund } = this.state;
		return (
			<div className='container my-5'>
				<Link className='btn btn-cz mb-3' to='/fundraising'>
					Go Back
				</Link>
				<div className='row'>
					<div className='col-8'>
						<Funk />
						<h1>{fund.title}</h1>
						<p>{fund.description}</p>
					</div>
					<div className='col-4'>
						<h1>{`Required Amount: ${fund.requiredAmount}`}</h1>
						{this.renderAmount(fund)}

						<div className='my-2'>
							<Link
								style={{ float: 'left' }}
								className='btn btn-lg btn-cz mb-3'
								to='/fundraising'
							>
								Donate Now
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FundDetail;
