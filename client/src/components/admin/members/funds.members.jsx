import React, { Component } from 'react';
import { paginate } from '../../../utils/paginate';
import axios from 'axios';
import auth from './../../../services/authService';
import { apiUrl } from '../../../config.json';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './../../common/pagination';
import ListGroup from './../../common/listGroup';
const apiEndpoint = apiUrl + '/funds';

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
      apiEndpoint + '/user/' + this.state.user._id
    );
    this.setState({ funds });
  }

  handleDelete = async (fund) => {
    const originalFunds = this.state.funds;
    const funds = this.state.funds.filter((f) => f._id !== fund._id);

    this.setState({ funds });

    try {
      await axios.delete(apiEndpoint + '/' + fund._id);
      toast.success('The fund is successfully deleted!');
    } catch (ex) {
      toast.error('Failed to delete this fund!');
      this.setState({ funds: originalFunds });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleisApprovedSelect = (isApproved) => {
    this.setState({ selectedisApproved: isApproved, currentPage: 1 });
    console.log(this.state.selectedisApproved);
  };

  render() {
    if (!this.state.funds.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          <img src={require('../../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.funds.length === 47)
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          You haven't posted any funds!
          <br />
          <Link to='/fundraising/form' className='btn btn-cz'>
            Post a fund
          </Link>
        </h1>
      );
    else {
      console.log(this.state.funds.length);
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
                <thead style={{ color: '#fff', backgroundColor: ' #159570' }}>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
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
                      {/* <td>{}</td> */}
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => this.handleDelete(fund)}
                        >
                          Delete
                        </button>
                      </td>
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
}

export default FundsMembers;
