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

export default class ComplainsMembers extends Component {
  state = {
    user: {},
    complains: [],
    status: [
      { _id: 0, name: 'All' },
      { _id: 1, name: 'Pending...' },
      { _id: 2, name: 'Resolved!' },
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
    const { data: complains } = await axios.get(
      'http://localhost:5000/api/complains/user/' + this.state.user._id
    );
    this.setState({ complains });
  }

  handleDelete = async (complain) => {
    const originalComplains = this.state.complains;
    const complains = this.state.complains.filter(
      (c) => c._id !== complain._id
    );
    this.setState({ complains });

    try {
      await axios.delete(apiUrl + '/complains/' + complain._id);
      toast.success('The complain was successfully deleted!');
    } catch (ex) {
      toast.error('Failed to delete the complain!');
      this.setState({ complains: originalComplains });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleStatusSelect = (status) => {
    this.setState({ selectedStatus: status, currentPage: 1 });
  };

  render() {
    if (!this.state.complains.length) return <div></div>;
    if (this.state.complains.length === 47)
      return <div>No complains found</div>;
    else {
      const { complains: allComplains, pageSize, currentPage } = this.state;
      const filtered =
        this.state.selectedStatus && this.state.selectedStatus._id
          ? allComplains.filter(
              (i) => i.status === this.state.selectedStatus.name
            )
          : allComplains;

      const complains = paginate(filtered, currentPage, pageSize);
      return (
        <React.Fragment>
          <div className='row'>
            <ToastContainer />
            <div className='col-3'>
              {
                <ListGroup
                  items={this.state.status}
                  onItemSelect={this.handleStatusSelect}
                  selectedItem={this.state.selectedStatus}
                />
              }
            </div>
            <div className='col-9'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {complains.map((complain) => (
                    <tr key={complain._id}>
                      <th scope='row'>{complains.indexOf(complain)}</th>
                      <td>
                        {/* <Link to={`ad/${bill._id}`}> */}
                        {complain.title}
                        {/* </Link> */}
                      </td>
                      <td>{complain.status}</td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => this.handleDelete(complain)}
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
