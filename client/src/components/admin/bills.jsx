import React, { Component } from 'react';
import { paginate } from '../../utils/paginate';
import axios from 'axios';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import auth from '../../services/authService';
import moment from 'moment';
import { apiUrl } from '../../config.json';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Pagination from '../common/pagination';
import ListGroup from '../common/listGroup';
import { update } from 'lodash';
import _ from 'lodash';
const apiEndpoint = apiUrl + '/bills';

const list = [
  { name: 'January' },
  { name: 'Febuary' },
  { name: 'March' },
  { name: 'April' },
  { name: 'May' },
  { name: 'June' },
  { name: 'July' },
  { name: 'August' },
  { name: 'September' },
  { name: 'October' },
  { name: 'November' },
  { name: 'December' },
];

const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: '←', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '→', className: 'arrow-next' });

const selected = 'July';

export default class Bills extends Component {
  constructor(props) {
    super(props);
    this.handlePaid = this.handlePaid.bind(this);
    this.menuItems = Menu(list, selected);
  }
  state = {
    selected,
    user: {},
    bills: [],
    isPaid: [
      { _id: 0, name: 'All', isPaid: 'null' },
      { _id: 1, name: 'Paid', isPaid: 'true' },
      { _id: 2, name: 'Not Paid', isPaid: 'false' },
    ],
    pageSize: 5,
    currentPage: 1,
  };

  onSelect = (key) => {
    this.setState({ selected: key });
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
    const { data: bills } = await axios.get(apiEndpoint);
    this.setState({ bills });
  }
  renderButton(bill) {
    if (bill.isPaid === 'true') {
      return (
        <button
          className='btn btn-danger'
          onClick={() => this.handleUpdate(bill)}
        >
          Update
        </button>
      );
    } else {
      return (
        <button className='btn btn-cz' onClick={() => this.handleUpdate(bill)}>
          Update
        </button>
      );
    }
  }

  handleUpdate = async (bill) => {
    const bills = [...this.state.bills];
    const index = bills.indexOf(bill);

    if (bill.isPaid === 'false') {
      bill.isPaid = 'true';

      await axios.put(apiEndpoint + '/' + bill._id, {
        isPaid: 'true',
      });

      toast.success('This bills is successfully paid now');
    } else {
      bill.isPaid = 'false';

      await axios.put(apiEndpoint + '/' + bill._id, {
        isPaid: 'false',
      });

      toast.error('This bill is now unpaid');
    }
    // const { data } = await axios.get(apiEndpoint + '/id/' + bill._id);

    bills[index] = bill;

    console.log(bills[index]);

    this.setState({ bills });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleisPaidSelect = (isPaid) => {
    this.setState({ selectedisPaid: isPaid, currentPage: 1 });
    console.log(this.state.selectedisPaid);
  };

  handlePaid(paid) {
    if (paid === 'true') {
      return 'Paid';
    } else {
      return 'Not Paid';
    }
  }

  render() {
    if (!this.state.bills.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    if (this.state.bills === 'No bill found!')
      return (
        <h1
          className='align-self-center justify-content-center text-center'
          style={{ padding: '100px' }}
        >
          No bill was found!
        </h1>
      );
    const { bills: allBills, pageSize, currentPage, selected } = this.state;

    const menu = this.menuItems;
    const filtered =
      this.state.selectedisPaid && this.state.selectedisPaid._id
        ? allBills.filter((i) => i.isPaid === this.state.selectedisPaid.isPaid)
        : allBills;

    const bills = paginate(filtered, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className='row'>
          <ToastContainer />
          <div className='col-3'>
            {
              <ListGroup
                items={this.state.isPaid}
                onItemSelect={this.handleisPaidSelect}
                selectedItem={this.state.selectedisPaid}
              />
            }
          </div>
          <div className='col-9'>
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
            <table className='table'>
              <thead style={{ color: '#fff', backgroundColor: ' #159570' }}>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Mem#</th>
                  <th scope='col'>Bill Date</th>
                  <th scope='col'>Paid/NotPaid</th>
                  <th scope='col'>Update</th>
                  {/* <th scope='col'>Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {bills.map((bill) => (
                  <tr key={bill._id}>
                    <th scope='row'>{bills.indexOf(bill)}</th>
                    <td>
                      <Link
                        className='text-dark'
                        to={`/profile/${bill.userId}`}
                      >
                        <img
                          src={bill.userImage}
                          width='25'
                          height='25'
                          className='avatar d-inline-block align-top'
                          alt='React Bootstrap logo'
                        />
                      </Link>
                      <span style={{ paddingLeft: '10px' }}>
                        <Link
                          className='text-dark'
                          to={`/profile/${bill.userId}`}
                        >
                          {bill.userName}
                        </Link>{' '}
                      </span>
                    </td>
                    <td>{bill.userMembershipNumber}</td>
                    <td>{moment(bill.dateOfIssue).format('MMM YYYY')}</td>
                    <td>{this.handlePaid(bill.isPaid)}</td>
                    <td>{this.renderButton(bill)}</td>
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
