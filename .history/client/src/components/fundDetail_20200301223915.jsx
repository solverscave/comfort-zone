import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import thousandRupees from "../assets/img/PKR_Rs_1000.jpg";

const apiEndpoint = "http://localhost:5000/api/funds/";

class FundDetail extends Component {
  state = {
    fund: {}
  };

  async componentDidMount() {
    const { data } = await axios.get(
      apiEndpoint + "/" + this.props.match.params.id
    );

    const fund = data[0];
    this.setState({ fund });
  }

  renderAmount = fund => {
    if (fund.requiredAmount === 1000)
      return (
        <h3>
          <img src={thousandRupees} alt="thousandRupees" width="260px" /> x 1
        </h3>
      );
  };
  render() {
    const { fund } = this.state;
    return (
      <div className="container my-5">
        <Link className="btn btn-cz mb-3" to="/advertisement">
          Go Back
        </Link>
        <div className="row">
          <div className="col-8">
            <img
              style={{
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                border: "0px",
                width: "45.7rem",
                height: "25.7rem",
                objectFit: "cover"
              }}
              src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/7/1/1372670553964/Man-with-glasses-and-hand-008.jpg?width=620&quality=85&auto=format&fit=max&s=d41845e1aba849b376c913c04d6bb9b6"
              className="rounded mx-auto d-block"
              alt="..."
            />
            {/* <div className="col-4">
              <h1>{`Required Amount: ${fund.requiredAmount}`}</h1>
              {this.renderAmount(fund)}

              <div className="my-2">
                <Link
                  style={{ float: "left" }}
                  className="btn btn-lg btn-cz mb-3"
                  to="/fundraising"
                >
                  Donate Now
                </Link>
              </div>
            </div> */}
            <div
              className="card text-left mt-4"
              style={{
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                border: "0px"
              }}
            >
              <div className="card-body">
                <h4
                  className="card-title"
                  style={{
                    marginBottom: "2px",
                    fontFamily: "Proxima Nova",
                    fontSize: "30px",
                    color: "#159570"
                  }}
                >
                  You didn't gift just milk, you gifted life.
                  {/* {fund.title} */}
                </h4>
                <p
                  className="card-text"
                  style={{
                    marginBottom: "2px",
                    fontFamily: "Proxima Nova",
                    fontSize: "18px",
                    color: "#2e2e2e"
                  }}
                >
                  {/* {fund.description} */}
                  On novembrer 2019, Antonella, one of our project managers, was
                  in Benin to check on our kids and to bring to our nutritional
                  centers the thing they need the most: milk powder. Thanks also
                  to your generosity, this time we managed to bring with us
                  1000€ worth of this precious powder that were distributed
                  among our 4 centers in Abomey, Perma, Natitingou and
                  Boukoumbè. With this we helped more than 130 babies! Milk
                  powder is essential to help undernourished children to
                  recover, but this isn't the only reason why it is important.
                  Breast milk, infact, can be the carrier of the HIV virus,
                  which is sadly quite spread here. This means that for many
                  mothers it is impossible to breastfeed without transmitting
                  the virus to their children. To have milk powder means, for
                  all of theese children, to have a chace to live. That's why
                  your support for this project means not only giving milk, but
                  litteraly saving lives! So Thank you, dear friend, for all the
                  lives you saved! We hope you'll continue to support our effort
                  to save the lives of many children.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="card text-center"
              style={{
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                border: "0px"
              }}
            >
              <div className="card-body">
                <a href="#" className="btn btn-cz btn-lg-new btn-lg mt-2 w-100">
                  <i className="fa fa-alert"></i> Safety Precautions
                </a>
                <h4
                  className="card-title mt-4 text-left"
                  style={{
                    marginBottom: "2px",
                    fontFamily: "Proxima Nova",
                    fontSize: "18px",
                    color: "#159570"
                  }}
                >
                  <ol>
                    <li>Use a safe location to meet seller</li>
                    <li>Avoid cash transactions</li>
                    <li>Beware of unrealistic offers</li>
                  </ol>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FundDetail;
