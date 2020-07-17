import React, { Component } from 'react';
import { paginate } from '../../../utils/paginate';
import axios from 'axios';
import auth from './../../../services/authService';
import moment from 'moment';
import { apiUrl } from '../../../config.json';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './../../common/pagination';
import ListGroup from './../../common/listGroup';
const apiEndpoint = apiUrl + '/complains';

class ComplainsMembers extends Component {
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
      await axios.delete(apiEndpoint + '/' + complain._id);
      toast.success('The complain was successfully deleted!');
    } catch (ex) {
      toast.error('Failed to delete the complain!');
      this.setState({ complains: originalComplains });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlestatusSelect = (status) => {
    this.setState({ selectedstatus: status, currentPage: 1 });
    console.log(this.state.selectedstatus);
  };

  render() {
    const { complains: allComplains, pageSize, currentPage } = this.state;

    const filtered =
      this.state.selectedstatus && this.state.selectedstatus._id
        ? allComplains.filter(
            (i) => i.status === this.state.selectedstatus.status
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
                onItemSelect={this.handlestatusSelect}
                selectedItem={this.state.selectedstatus}
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

export default ComplainsMembers;
