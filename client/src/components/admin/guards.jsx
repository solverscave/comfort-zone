import React, { Component } from 'react';
import { paginate } from '../../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { apiUrl } from '../../config.json';
const apiEndpoint = apiUrl + '/guards';

class Guards extends Component {
  state = {
    guards: [],
    // pageSize: 100,
    // currentPage: 1,
  };

  async componentDidMount() {
    const { data: guards } = await axios.get(apiEndpoint);
    console.log(guards);
    this.setState({ guards });
  }

  handleDelete = async (driver) => {
    const originalGuards = this.state.guards;
    const guards = this.state.guards.filter((d) => d._id !== driver._id);

    this.setState({ guards });

    try {
      await axios.delete(apiEndpoint + '/' + driver._id);
      toast.success('Driver has been removed!');
    } catch (ex) {
      toast.error('Failed to delete this driver.');
      this.setState({ guards: originalGuards });
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
    if (!this.state.guards.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.guards === 'No driver was found!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          No driver was found!
        </h1>
      );
    else {
      // const { guards: allGuards, pageSize, currentPage } = this.state;
      const { guards } = this.state;

      //   const filtered =
      //     this.state.selectedCondition && this.state.selectedCondition._id
      //       ? allGuards.filter(
      //           (i) => i.condition === this.state.selectedCondition.name
      //         )
      //       : allGuards;

      // const guards = paginate(currentPage, pageSize);

      return (
        <React.Fragment>
          <div className='row'>
            <ToastContainer />
            <div className='col-9'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Names</th>
                    <th scope='col'>Mobile Numbers</th>
                    <th scope='col'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {guards.map((driver) => (
                    <tr key={driver._id}>
                      <th scope='row'>{guards.indexOf(driver)}</th>

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
              itemsCount={guards.length}
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

export default Guards;
