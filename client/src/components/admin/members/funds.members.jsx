import React, { Component } from 'react';
import { paginate } from '../../../utils/paginate';
import axios from 'axios';
import auth from './../../../services/authService';
import { apiUrl } from '../../../config.json';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Pagination from './../../common/pagination';
import ListGroup from './../../common/listGroup';

class FundsMembers extends Component {
  state = {
    user: {},
    funds: [],
    isApproved: [
      { _id: 0, name: 'All' },
      { _id: 1, name: 'Approved' },
      { _id: 2, name: 'Pending' },
      { _id: 2, name: 'Rejected' },
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
    const { data: funds } = await axios.get(
      'http://localhost:5000/api/funds/user/' + this.state.user._id
    );
    this.setState({ funds });
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

  handleisApprovedSelect = (isApproved) => {
    this.setState({ selectedisApproved: isApproved, currentPage: 1 });
    console.log(this.state.selectedisApproved);
  };

  render() {
    const { funds: allFunds, pageSize, currentPage } = this.state;

    const filtered =
      this.state.selectedisApproved && this.state.selectedisApproved._id
        ? allFunds.filter(
            (i) => i.isApproved === this.state.selectedisApproved.name
          )
        : allFunds;

    const funds = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className='row'>
          <ToastContainer />
          <div className='col-3'>
            {
              <ListGroup
                items={this.state.isApproved}
                onItemSelect={this.handleisApprovedSelect}
                selectedItem={this.state.selectedisApproved}
              />
            }
          </div>
          <div className='col-9'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>title</th>
                  <th scope='col'>Raised so Far</th>
                  <th scope='col'>Delete</th>
                  {/* <th scope='col'>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {funds.map((fund) => (
                  <tr key={fund._id}>
                    <th scope='row'>{funds.indexOf(fund)}</th>
                    <td>
                      {/* <Link to={`ad/${bill._id}`}> */}
                      {fund.title}
                      {/* </Link> */}
                    </td>
                    <td>{fund.raisedAmount}</td>
                    <td>{}</td>
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

export default FundsMembers;
