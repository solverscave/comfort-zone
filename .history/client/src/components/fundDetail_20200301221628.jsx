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
                height: "20.7rem",
                objectFit: "cover"
              }}
              src="http://localhost:3000/uploads/Office-000.jpg"
              className="rounded mx-auto d-block"
              alt="..."
            />
            <div className="col-4">
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
            </div>
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
                  {ad.title}
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
                  {ad.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FundDetail;
