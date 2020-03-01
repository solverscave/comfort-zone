import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import thousandRupees from '../assets/img/PKR_Rs_1000.jpg';

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
					<div className='col-8'>Col 9</div>
					<div className='col-4'>
						<div
							className='card text-center'
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px'
							}}
						>
							<div className='card-body'>
								<h4
									className='card-title'
									style={{
										marginBottom: '2px',
										fontFamily: 'Proxima Nova',
										fontSize: '30px',
										color: '#159570'
									}}
								>
									Price: Rs. 10000
								</h4>
							</div>
						</div>
						<div
							className='card text-center mt-4'
							style={{
								boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.16)',
								border: '0px'
							}}
						>
							<div className='card-body'>
								<a href='#' class='btn btn-cz btn-lg-new btn-lg w-100'>
									<i class='fa fa-phone'></i> 032157112....
								</a>
								<a href='#' class='btn btn-cz btn-lg-new btn-lg mt-2 w-100'>
									<i class='fa fa-envelope'></i> Send a message
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default FundDetail;
