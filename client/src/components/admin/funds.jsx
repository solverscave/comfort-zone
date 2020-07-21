import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import apiUrl from '../../config.json';
import ApprovalCard from '../approvalCard';
import axios from 'axios';
const apiEndpoint = 'http://localhost:5000/api/funds';

class Funds extends Component {
  state = {
    funds: [],
  };

  async componentDidMount() {
    const data = await axios.get(apiEndpoint + '/isApproved/Pending');
    const funds = data.data;

    if (!funds.length) {
      console.log(funds);
    }
    this.setState({ funds });
  }

  acceptFund = async (fund) => {
    await axios.put(apiEndpoint + '/' + fund._id, { isApproved: 'Approved' });

    const data = await axios.get(apiEndpoint + '/isApproved/Pending');
    const funds = data.data;

    this.setState({ funds });

    toast.success('The fund is successfully accepted!');
  };

  rejectFund = async (fund) => {
    await axios.put(apiEndpoint + '/' + fund._id, { isApproved: 'Rejected' });

    const data = await axios.get(apiEndpoint + '/isApproved/Pending');
    const funds = data.data;

    this.setState({ funds });
    toast.error('The fund is successfully rejected!');
  };
  render() {
    if (!this.state.funds.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.funds === 'Alas! Complain with the given id was not found!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          No funds found for the approval!
        </h1>
      );
    return (
      <React.Fragment>
        <div className='containers'>
          <h1>Funds</h1>
          <ToastContainer />

          <div className='row'>
            {this.state.funds.map((fund) => (
              <div className='col-6 my-2' key={fund._id}>
                <ApprovalCard
                  title={fund.title}
                  description={fund.description}
                  handleAccept={() => this.acceptFund(fund)}
                  handleReject={() => this.rejectFund(fund)}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Funds;
