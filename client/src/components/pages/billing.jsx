import React, { Component } from "react";
import { Link } from "react-router-dom";
import GenerateBill from "./../generateBill";
import { PDFViewer } from "@react-pdf/renderer";
import bills from "./../../database/billingData";
import StripeCheckout from "react-stripe-checkout";
import SubHeader from "./../common/subHeader";

class Billing extends Component {
  state = {
    bills: bills
  };

  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  componentDidMount() {
    console.log("hello");
    document.getElementsByTagName("iframe")[0].style.width = "100%";
    document.getElementsByTagName("iframe")[0].style.height = "720px";
  }

  render() {
    const { bills } = this.state;
    return (
      <div>
        <SubHeader
          classes="subheader-billing py-5 text-white"
          title="Billing"
          desc="Use this forum to add issues, find issues and comment on issues."
          buttonTitle="Pay Bill"
        />
        <div className="container my-5">
          <div className="row mb-5">
            <div className="col-5 text-right">
              <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_w433bBxBkSoMrsjcU3Tkmy2w00WzDBwp1J"
              />
            </div>
            <div className="col-2 text-center">
              <h3>OR</h3>
            </div>
            <div className="col-5 text-left">
              <Link to={`billing/payment`}>
                <button className="btn btn-cz btn-lg">Print Bill</button>
              </Link>
            </div>
          </div>
          <div>
            <PDFViewer>
              <GenerateBill name={bills[0].name} amount={bills[0].amount} />
            </PDFViewer>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
