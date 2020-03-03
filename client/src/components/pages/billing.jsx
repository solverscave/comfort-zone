import React, { Component } from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import { Link } from 'react-router-dom';
import GenerateBill from './../generateBill';
import { PDFViewer } from '@react-pdf/renderer';
import StripeCheckout from 'react-stripe-checkout';
import SubHeader from './../common/subHeader';

class Billing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			bill: []
		};
	}

	onToken = token => {
		fetch('/save-stripe-token', {
			method: 'POST',
			body: JSON.stringify(token)
		}).then(response => {
			response.json().then(data => {
				alert(`We are in business, ${data.email}`);
			});
		});
	};

	async componentDidMount() {
		let user = auth.getCurrentUser();
		if (user) {
			const { data } = await axios.get(
				'http://localhost:5000/api/users/' + user._id
			);
			user = data[0];
			this.setState({ user });
		} else if (!user) {
			user = {
				_id: null
			};
			this.setState({ user });
		}

		const { data } = await axios.get(
			'http://localhost:5000/api/bills/' + this.state.user._id
		);
		const bill = data;
		this.setState({ bill });
		document.getElementsByTagName('iframe')[0].style.width = '100%';
		document.getElementsByTagName('iframe')[0].style.height = '720px';
	}

	render() {
		const { bill } = this.state;
		const thisBill = bill[0];
		if (bill.length === 0)
			return (
				<div class='spinner-border text-success' role='status'>
					<span class='sr-only'>Loading...</span>
				</div>
			);
		else
			return (
				<div>
					<SubHeader
						classes='subheader-billing py-5 text-white'
						title='Billing'
						desc='Use this forum to add issues, find issues and comment on issues.'
						buttonTitle='Pay Bill'
					/>
					<div className='container my-5'>
						<div className='row mb-5'>
							<div className='col-5 text-right'>
								<StripeCheckout
									token={this.onToken}
									stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
								/>
							</div>
							<div className='col-2 text-center'>
								<h3>OR</h3>
							</div>
							<div className='col-5 text-left'>
								<Link to={`billing/payment`}>
									<button className='btn btn-cz btn-lg'>Print Bill</button>
								</Link>
							</div>
						</div>
						<div>
							<PDFViewer>
								<GenerateBill
									userName={this.state.user.name}
									id={thisBill._id}
									dateOfIssue={thisBill.dateOfIssue}
									dueDate={thisBill.dueDate}
									arrearAmount={thisBill.arrearAmount}
									waterCharges={thisBill.waterCharges}
									conservancyCharges={thisBill.conservancyCharges}
									streetLightCharges={thisBill.streetLightCharges}
									roadMaintenanceCharges={thisBill.roadMaintenanceCharges}
									graveyardCharges={thisBill.graveyardCharges}
									electricityCharges={thisBill.electricityCharges}
									totalAmount={thisBill.electricityCharges}
									dueAmount={thisBill.dueAmount}
								/>
							</PDFViewer>
						</div>
					</div>
				</div>
			);
	}
}

export default Billing;
