import React, { Component } from 'react';
import { paginate } from '../../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { apiUrl } from '../../config.json';
const apiEndpoint = apiUrl + '/drivers';

class Drivers extends Component {
  state = {
    drivers: [],
    // pageSize: 100,
    // currentPage: 1,
  };

  async componentDidMount() {
    const { data: drivers } = await axios.get(apiEndpoint);
    console.log(drivers);
    this.setState({ drivers });
  }

  handleDelete = async (driver) => {
    const originalDrivers = this.state.drivers;
    const drivers = this.state.drivers.filter((d) => d._id !== driver._id);

    this.setState({ drivers });

    try {
      await axios.delete(apiEndpoint + '/' + driver._id);
      toast.success('Driver has been removed!');
    } catch (ex) {
      toast.error('Failed to delete this driver.');
      this.setState({ drivers: originalDrivers });
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
    if (!this.state.drivers.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.drivers === 'No driver was found!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          No driver was found!
        </h1>
      );
    else {
      // const { drivers: allDrivers, pageSize, currentPage } = this.state;
      const { drivers } = this.state;

      //   const filtered =
      //     this.state.selectedCondition && this.state.selectedCondition._id
      //       ? allDrivers.filter(
      //           (i) => i.condition === this.state.selectedCondition.name
      //         )
      //       : allDrivers;

      // const drivers = paginate(currentPage, pageSize);

      return (
        <React.Fragment>
          <div className='row'>
            <ToastContainer />
            <div className='col-9'>
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
                  {drivers.map((driver) => (
                    <tr key={driver._id}>
                      <th scope='row'>{drivers.indexOf(driver)}</th>

                      <td>{driver.name}</td>
                      <td>{driver.mobile}</td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => this.handleDelete(driver)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <Pagination
              itemsCount={drivers.length}
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

export default Drivers;
