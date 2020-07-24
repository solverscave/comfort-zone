import React, { Component } from 'react';
import axios from 'axios';
import auth from '../../services/authService';
import GenerateBill from './../generateBill';
import PaidBill from './../paidBill';
import { PDFViewer } from '@react-pdf/renderer';
import StripeCheckout from 'react-stripe-checkout';
import { ToastContainer, toast } from 'react-toastify';
import { apiUrl } from '../../config.json';
import moment from 'moment';
const apiEndpoint = apiUrl + '/bills';

class Billing extends Component {
  state = {
    user: {},
    bill: [],
    product: {},
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

    //GETTING LAST BILL FOR THE USER
    const { data } = await axios.get(apiEndpoint + '/' + this.state.user._id);
    const bill = data;
    this.setState({ bill });

    //GETBILL HAS ALL THE DETAILS ABOUT THE BILL
    const getBill = bill[0];

    //GETTING THINGS FROM THE LAST BILL
    const date = getBill.dueDate;
    const isPaid = getBill.isPaid;
    const totalAmount = getBill.totalAmount;
    const dueAmount = getBill.dueAmount;

    const dueDay = moment(date).format('DD');
    const dueMonth = moment(date).format('MM');
    const dueYear = moment(date).format('YYYY');
    const dueDate = new Date(dueYear, dueMonth - 1, dueDay);
    const dueDayJs = dueDate.getDate();
    const dueMonthJs = dueDate.getMonth();

    const todayDate = new Date();
    const todayDay = todayDate.getDate();
    const todayMonth = todayDate.getMonth();
    const todayYear = todayDate.getFullYear();

    // console.log('isPaid: ' + isPaid);
    // console.log('totalAmount: ' + totalAmount);
    // console.log('dueAmount: ' + dueAmount);
    console.log('dueDay: ' + dueDayJs);
    console.log('todayDay: ' + todayDay);
    // console.log('todayMonth: ' + todayMonth);
    // console.log('todayYear: ' + todayYear);
    // console.log('Due Month JS: ' + dueMonthJs);

    if (
      isPaid === 'false' &&
      dueDayJs < todayDay &&
      dueMonthJs === todayMonth
    ) {
      toast.success('New bill has came!');
      var todayDate2 = new Date();
      var year = todayDate2.getFullYear();
      var month = todayDate2.getMonth();
      // var day = d.getDate();
      var nextMonth = todayDate2.getMonth() + 1;
      var thisDate = new Date(year, month, 1);
      var nextDate = new Date(year, nextMonth, 1);
      console.log(nextDate);
      console.log(nextMonth);

      const newBill = await axios.post(apiUrl + '/bills/', {
        dateOfIssue: thisDate,
        dueDate: nextDate,
        arrearAmount: 0,
        waterCharges: 0,
        conservancyCharges: 300,
        streetLightCharges: 300,
        roadMaintenanceCharges: 300,
        graveyardCharges: 0,
        electricityCharges: 1120,
        totalAmount: 1890 + totalAmount,
        dueAmount: dueAmount + totalAmount,
        userId: user._id,
        userImage: user.imageUrl,
        userName: user.name,
        userMembershipNumber: user.membershipNumber,
        isPaid: 'false',
      });
      window.location.reload();
      console.log(newBill);
    }
    if (isPaid === 'true' && dueDayJs < todayDay && dueMonthJs === todayMonth) {
      toast.success('New bill has came!');
      var todayDate2 = new Date();
      var year = todayDate2.getFullYear();
      var month = todayDate2.getMonth();
      // var day = d.getDate();
      var nextMonth = todayDate2.getMonth() + 1;
      var thisDate = new Date(year, month, 1);
      var nextDate = new Date(year, nextMonth, 1);
      console.log(nextDate);
      console.log(nextMonth);

      const newBill = await axios.post(apiUrl + '/bills/', {
        dateOfIssue: thisDate,
        dueDate: nextDate,
        arrearAmount: 0,
        waterCharges: 0,
        conservancyCharges: 300,
        streetLightCharges: 300,
        roadMaintenanceCharges: 300,
        graveyardCharges: 0,
        electricityCharges: 1120,
        totalAmount: 1890,
        dueAmount: 0,
        userId: user._id,
        userImage: user.imageUrl,
        userName: user.name,
        userMembershipNumber: user.membershipNumber,
        isPaid: 'false',
      });
      window.location.reload();
      console.log(newBill);
    }

    document.getElementsByTagName('iframe')[0].style.width = '100%';
    document.getElementsByTagName('iframe')[0].style.height = '720px';
  }
  updateBill() {
    const bill = this.state.bill;
    console.log(bill);
    bill[0].isPaid = 'true';
    this.setState({ bill });
  }
  async handleToken(token) {
    let user = auth.getCurrentUser();
    console.log(user._id);

    const { data } = await axios.get(apiEndpoint + '/' + user._id);
    const bill = data[0];
    console.log(bill);

    const response = await axios.post(apiUrl + '/pay/', {
      token,
      product: {
        name: bill._id,
        price: bill.totalAmount,
        description:
          'Mem# ' +
          bill.userMembershipNumber +
          ' has successfully paid the Bill Ref# ' +
          bill._id,
      },
    });
    const { status } = response.data;
    console.log('Response:', response.data);

    if (status === 'success') {
      await axios.put(apiEndpoint + '/' + bill._id, {
        isPaid: 'true',
      });
      toast('Your bill has been successfully paid!', { type: 'success' });
      window.location.reload();
    } else {
      toast('Something went wrong', { type: 'error' });
    }
  }

  getButton() {
    const billAmount = (this.state.bill.totalAmount / 164) * 100;
    return (
      <StripeCheckout
        stripeKey='pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J'
        token={this.handleToken}
        amount={billAmount}
        name='Comfort Zone'
        image='http://localhost:3000/uploads/payment-logo.jpg'
        label='Pay Bill Online'
      />
    );
  }
  getButton1() {
    return (
      <button className='btn btn-cz' disabled>
        Your bill is paid!
      </button>
    );
  }

  render() {
    if (!this.state.bill.length)
      return (
        <div
          className='align-self-center justify-content-center text-center'
          style={{ padding: '150px' }}
        >
          <img src={require('../../assets/icons/loading.gif')} alt='' />
        </div>
      );
    const { bill } = this.state;
    const thisBill = bill[0];

    if (bill.length === 0) return null;
    else if (thisBill.isPaid === 'false')
      return (
        <div>
          <ToastContainer />
          <div className='subheader-billing py-5 text-white'>
            <div className='align-self-center justify-content-center text-center'>
              <div>
                <h1>Now paying bill is easier!</h1>
              </div>
              <div>
                <p>Make your bill payment from home with the secure method.</p>
              </div>
              {this.getButton()}
            </div>
          </div>
          <div className='container my-5'>
            <div>
              <PDFViewer>
                <GenerateBill
                  userName={this.state.user.name}
                  userMembershipNumber={this.state.user.membershipNumber}
                  userAddress={this.state.user.address}
                  id={thisBill._id}
                  dateOfIssue={moment(thisBill.dateOfIssue).format(
                    'DD MMM YYYY'
                  )}
                  dueDate={moment(thisBill.dueDate).format('DD MMM YYYY')}
                  arrearAmount={thisBill.dueAmount}
                  waterCharges={thisBill.waterCharges}
                  conservancyCharges={thisBill.conservancyCharges}
                  streetLightCharges={thisBill.streetLightCharges}
                  roadMaintenanceCharges={thisBill.roadMaintenanceCharges}
                  graveyardCharges={thisBill.graveyardCharges}
                  electricityCharges={thisBill.electricityCharges}
                  totalAmount={thisBill.totalAmount}
                  dueAmount={thisBill.dueAmount}
                />
              </PDFViewer>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <ToastContainer />
          <div className='subheader-billing py-5 text-white'>
            <div className='align-self-center justify-content-center text-center'>
              <div>
                <h1>Now paying bill is easier!</h1>
              </div>
              <div>
                <p>Make your bill payment from home with the secure method.</p>
              </div>
              {this.getButton1()}
            </div>
          </div>
          <div className='container my-5'>
            <div>
              <PDFViewer>
                <PaidBill />
              </PDFViewer>
            </div>
          </div>
        </div>
      );
  }
}

export default Billing;
