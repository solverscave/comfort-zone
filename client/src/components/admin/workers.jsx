import React, { Component } from 'react';
import { paginate } from '../../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { apiUrl } from '../../config.json';
const apiEndpoint = apiUrl + '/workers';

class Workers extends Component {
  state = {
    workers: [],
    // pageSize: 100,
    // currentPage: 1,
  };

  async componentDidMount() {
    const { data: workers } = await axios.get(apiEndpoint);
    console.log(workers);
    this.setState({ workers });
  }

  handleDelete = async (worker) => {
    const originalDrivers = this.state.workers;
    const workers = this.state.workers.filter((d) => d._id !== worker._id);

    this.setState({ workers });

    try {
      await axios.delete(apiEndpoint + '/' + worker._id);
      toast.success('Worker has been removed!');
    } catch (ex) {
      toast.error('Failed to delete this worker.');
      this.setState({ workers: originalDrivers });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  //   handleConditionSelect = (condition) => {
  //     this.setState({ selectedCondition: condition, currentPage: 1 });
  //     console.log(this.state.selectedCondition);
  //   };

  render() {
    if (!this.state.workers.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.workers === 'No worker was found!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          No worker was found!
        </h1>
      );
    else {
      // const { workers: allDrivers, pageSize, currentPage } = this.state;
      const { workers } = this.state;

      //   const filtered =
      //     this.state.selectedCondition && this.state.selectedCondition._id
      //       ? allDrivers.filter(
      //           (i) => i.condition === this.state.selectedCondition.name
      //         )
      //       : allDrivers;

      // const workers = paginate(currentPage, pageSize);

      return (
        <React.Fragment>
          <div className='row'>
            <ToastContainer />
            <div className='col-12'>
              <table className='table'>
                <thead style={{ color: '#fff', backgroundColor: ' #159570' }}>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Names</th>
                    <th scope='col'>Mobile Numbers</th>
                    <th scope='col'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker) => (
                    <tr key={worker._id}>
                      <th scope='row'>{workers.indexOf(worker)}</th>

                      <td>{worker.name}</td>
                      <td>{worker.mobile}</td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => this.handleDelete(worker)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <Pagination
              itemsCount={workers.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            /> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Workers;
