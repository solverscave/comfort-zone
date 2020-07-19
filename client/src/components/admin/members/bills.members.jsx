import React, { Component } from 'react';
import { paginate } from '../../../utils/paginate';
import axios from 'axios';
import auth from './../../../services/authService';
import moment from 'moment';
import { apiUrl } from '../../../config.json';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Pagination from './../../common/pagination';
import ListGroup from './../../common/listGroup';

class BillsMembers extends Component {
  constructor(props) {
    super(props);
    this.handlePaid = this.handlePaid.bind(this);
  }
  state = {
    user: {},
    bills: [],
    isPaid: [
      { _id: 0, name: 'All', isPaid: null },
      { _id: 1, name: 'Paid', isPaid: 'true' },
      { _id: 2, name: 'Not Paid', isPaid: 'false' },
    ],
    pageSize: 5,
    currentPage: 1,
  };

  async componentDidMount() {
    let user = auth.getCurrentUser();
    if (user) {
      const { data } = await axios.get(apiUrl + '/users/' + user._id);
      user = data[0];
      this.setState({ user });
    } else if (!user) {
      user = {
        _id: null,
      };
      this.setState({ user });
      console.log(user);
    }
    const { data: bills } = await axios.get(
      'http://localhost:5000/api/bills/' + this.state.user._id
    );
    this.setState({ bills });
  }

  // handleDelete = async (ad) => {
  //   const originalAds = this.state.ads;
  //   const ads = this.state.ads.filter((a) => a._id !== ad._id);

  //   this.setState({ ads });

  //   try {
  //     await axios.delete(apiEndpoint + '/' + ad._id);
  //     toast.success('The complain was successfully deleted!');
  //   } catch (ex) {
  //     toast.error('Failed to delete the complain!');
  //     this.setState({ ads: originalAds });
  //   }
  // };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleisPaidSelect = (isPaid) => {
    this.setState({ selectedisPaid: isPaid, currentPage: 1 });
    console.log(this.state.selectedisPaid);
  };

  handlePaid(paid) {
    if (paid === 'true') {
      return 'Paid';
    } else {
      return 'Not Paid';
    }
  }

  render() {
    const { bills: allBills, pageSize, currentPage } = this.state;

    const filtered =
      this.state.selectedisPaid && this.state.selectedisPaid._id
        ? allBills.filter((i) => i.isPaid === this.state.selectedisPaid.isPaid)
        : allBills;

    const bills = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className='row'>
          <ToastContainer />
          <div className='col-3'>
            {
              <ListGroup
                items={this.state.isPaid}
                onItemSelect={this.handleisPaidSelect}
                selectedItem={this.state.selectedisPaid}
              />
            }
          </div>
          <div className='col-9'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Bills</th>
                  <th scope='col'>Paid/NotPaid</th>
                  <th scope='col'>Total Amount</th>
                  {/* <th scope='col'>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill._id}>
                    <th scope='row'>{bills.indexOf(bill)}</th>
                    <td>
                      {/* <Link to={`ad/${bill._id}`}> */}
                      {moment(bill.dateOfIssue).format('MMM YYYY')}
                      {/* </Link> */}
                    </td>
                    <td>{this.handlePaid(bill.isPaid)}</td>
                    <td>{bill.totalAmount}</td>
                    {/* <td>
                      <button
                        className='btn btn-danger'
                        onClick={() => this.handleDelete(bill)}
                      >
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BillsMembers;
