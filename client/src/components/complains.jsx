import React, { Component } from 'react';
import { paginate } from '../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './common/pagination';
import moment from 'moment';
import Joi from 'joi-browser';
import Popup from 'reactjs-popup';
import Form from './common/form';
import ListGroup from './common/listGroup';
import { apiUrl } from '../config.json';
const apiEndpoint = apiUrl + '/complains';

export default class Complains extends Form {
  state = {
    complains: [],
    status: [
      { _id: 0, name: 'All' },
      { _id: 1, name: 'Resolved!' },
      { _id: 2, name: 'Pending...' },
    ],
    pageSize: 5,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: complains } = await axios.get(apiEndpoint);
    console.log(complains);
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

  handleStatusSelect = (status) => {
    this.setState({ selectedStatus: status, currentPage: 1 });
    console.log(this.state.selectedStatus);
  };

  render() {
    if (!this.state.complains.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.complains === 'No complain was found')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          No complain was found!
        </h1>
      );

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
              <thead style={{ color: '#fff', backgroundColor: ' #159570' }}>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Complains</th>
                  <th scope='col'>Posted by</th>
                  <th scope='col'>Status</th>
                  <th scope='col'>Assigned to</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {complains.map((complain) => (
                  <tr key={complain._id}>
                    <th scope='row'>{complains.indexOf(complain)}</th>
                    <td>
                      <Link to={`complain/${complain._id}`}>
                        {complain.title}
                      </Link>
                    </td>
                    <td>
                      <img
                        src={complain.userImage}
                        width='25'
                        height='25'
                        className='avatar d-inline-block align-top'
                        alt='React Bootstrap logo'
                      />
                      <span style={{ paddingLeft: '10px' }}>
                        <Link
                          className='text-dark'
                          to={`/profile/${complain.userId}`}
                        >
                          {complain.userName}
                        </Link>{' '}
                      </span>
                    </td>
                    <td>
                      <Popup
                        trigger={
                          <span
                            style={{ color: '#159570', padding: '0px' }}
                            className='btn'
                          >
                            {' '}
                            {complain.status}
                          </span>
                        }
                        position='top center'
                      >
                        <span style={{ fontWeight: 'bold' }}>Date:</span>{' '}
                        {moment(complain.date).format('hh:mm - MMM DD ')}
                      </Popup>
                    </td>
                    <td>{complain.complainHandlerName}</td>
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
