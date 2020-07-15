import React, { Component } from 'react';
import { paginate } from '../../../utils/paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from './../../common/pagination';
import ListGroup from './../../common/listGroup';
const apiEndpoint = 'http://localhost:5000/api/bills';

class BillsMembers extends Component {
  state = {
    bills: [],
    condition: [
      { _id: 0, name: 'All' },
      { _id: 1, name: 'new' },
      { _id: 2, name: 'used' },
    ],
    pageSize: 5,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: bills } = await axios.get(apiEndpoint);
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

  handleConditionSelect = (condition) => {
    this.setState({ selectedCondition: condition, currentPage: 1 });
    console.log(this.state.selectedCondition);
  };

  handlePaid(paid) {
    if (paid === true) {
      return 'Paid';
    } else {
      return 'Not Paid';
    }
  }

  render() {
    const { bills: allBills, pageSize, currentPage } = this.state;

    const filtered =
      this.state.selectedCondition && this.state.selectedCondition._id
        ? allBills.filter(
            (i) => i.condition === this.state.selectedCondition.name
          )
        : allBills;

    const bills = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className='row'>
          <ToastContainer />
          <div className='col-3'>
            {
              <ListGroup
                items={this.state.condition}
                onItemSelect={this.handleConditionSelect}
                selectedItem={this.state.selectedCondition}
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
                  {/* <th scope='col'>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill._id}>
                    <th scope='row'>{bills.indexOf(bill)}</th>
                    <td>
                      <Link to={`ad/${bill._id}`}>{bill.dateOfIssue}</Link>
                    </td>
                    <td>{bill.isPaid}</td>
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
