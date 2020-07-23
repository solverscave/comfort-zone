import React, { Component } from 'react';
import { paginate } from '../../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { apiUrl } from '../../config.json';
const apiEndpoint = apiUrl + '/users';

class Members extends Component {
  state = {
    members: [],
    // pageSize: 100,
    // currentPage: 1,
  };

  async componentDidMount() {
    const { data: members } = await axios.get(apiEndpoint);
    console.log(members);
    this.setState({ members });
  }

  handleDelete = async (member) => {
    const originalMembers = this.state.members;
    const members = this.state.members.filter((d) => d._id !== member._id);

    this.setState({ members });

    try {
      await axios.delete(apiEndpoint + '/' + member._id);
      toast.success('Driver has been removed!');
    } catch (ex) {
      toast.error('Failed to delete this member.');
      this.setState({ members: originalMembers });
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
    if (!this.state.members.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.members === 'No member was found!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          No member was found!
        </h1>
      );
    else {
      // const { members: allDrivers, pageSize, currentPage } = this.state;
      const { members } = this.state;

      //   const filtered =
      //     this.state.selectedCondition && this.state.selectedCondition._id
      //       ? allDrivers.filter(
      //           (i) => i.condition === this.state.selectedCondition.name
      //         )
      //       : allDrivers;

      // const members = paginate(currentPage, pageSize);

      return (
        <React.Fragment>
          <div className='row'>
            <ToastContainer />
            <Link
              to='/users/new'
              className='btn btn-cz'
              style={{ marginBottom: 20 }}
            >
              New User
            </Link>
            <div className='col-12'>
              <table className='table'>
                <thead style={{ color: '#fff', backgroundColor: ' #159570' }}>
                  <tr>
                    <th scope='col'>Membership Number</th>
                    <th scope='col'>Names</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member._id}>
                      {/* <th scope='row'>{members.indexOf(member)}</th> */}
                      <th scope='row'>{member.membershipNumber}</th>

                      <td>{member.name}</td>
                      <td>{member.phone}</td>
                      <td>{member.address}</td>
                      <td>
                        <button
                          className='btn btn-danger'
                          onClick={() => this.handleDelete(member)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <Pagination
              itemsCount={members.length}
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

export default Members;
