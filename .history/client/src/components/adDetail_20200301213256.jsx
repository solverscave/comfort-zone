import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiEndpoint = "http://localhost:5000/api/ads/";

class AdDetail extends Component {
  state = {
    ad: {}
  };

  async componentDidMount() {
    const { data } = await axios.get(
      apiEndpoint + "/" + this.props.match.params.id
    );

    const ad = data[0];
    this.setState({ ad });
  }

  render() {
    const { ad } = this.state;
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
            <div className="row mt-4">
              <div className="col-4">
                <img
                  style={{
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                    border: "0px",
                    width: "100%",
                    height: "10rem",
                    objectFit: "cover"
                  }}
                  src="http://localhost:3000/uploads/Office-000.jpg"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <div className="col-4">
                <img
                  style={{
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                    border: "0px",
                    width: "100%",
                    height: "10rem",
                    objectFit: "cover"
                  }}
                  src="http://localhost:3000/uploads/Office-000.jpg"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
              </div>
              <div className="col-4">
                <img
                  style={{
                    boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                    border: "0px",
                    width: "100%",
                    height: "10rem",
                    objectFit: "cover"
                  }}
                  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvideohive.net%2Fitem%2Fview-from-window-in-business-office-in-skyskraper-on-cloudy-sky-background-plate-chroma-key-video%2F21923740&psig=AOvVaw2zGFNGwsUn6oA_QVc8t405&ust=1583166738051000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjC5evZ-ecCFQAAAAAdAAAAABAD"
                  className="rounded mx-auto d-block"
                  alt="..."
                />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer fringilla a sapien vulputate aliquet. Donec sodales,
                  diam ac vulputate dictum, dolor ligula ornare arcu, sed ornare
                  orci dolor eget nunc. Curabitur non faucibus lorem, ac auctor
                  urna. Vivamus porttitor quam lorem, id tempus nibh volutpat
                  eu. Vestibulum vitae ipsum ac libero vulputate aliquet vel sit
                  amet sapien. Fusce et felis mollis, lobortis sem nec,
                  malesuada arcu. Morbi enim velit, dictum a venenatis laoreet,
                  viverra a lacus. Aliquam dolor dui, efficitur vitae laoreet
                  vitae, consequat eu est. Quisque faucibus rhoncus est ac
                  posuere. Vestibulum ante ipsum primis in faucibus orci luctus
                  et ultrices posuere cubilia Curae; Donec in neque cursus,
                  hendrerit ante eget, vehicula ex. Donec mollis lacinia nunc,
                  vitae porttitor tellus porttitor sed. Cras id nisl id tortor
                  viverra cursus vel congue lectus. Proin accumsan ipsum vitae
                  eros consectetur placerat. Vivamus ultrices felis vel urna
                  finibus vestibulum.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Integer fringilla a sapien vulputate aliquet.
                  Donec sodales, diam ac vulputate dictum, dolor ligula ornare
                  arcu, sed ornare orci dolor eget nunc. Curabitur non faucibus
                  lorem, ac auctor urna. Vivamus porttitor quam lorem, id tempus
                  nibh volutpat eu. Vestibulum vitae ipsum ac libero vulputate
                  aliquet vel sit amet sapien. Fusce et felis mollis, lobortis
                  sem nec, malesuada arcu. Morbi enim velit, dictum a venenatis
                  laoreet, viverra a lacus. Aliquam dolor dui, efficitur vitae
                  laoreet vitae, consequat eu est. Quisque faucibus rhoncus est
                  ac posuere. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia Curae; Donec in neque
                  cursus, hendrerit ante eget, vehicula ex. Donec mollis lacinia
                  nunc, vitae porttitor tellus porttitor sed. Cras id nisl id
                  tortor viverra cursus vel congue lectus. Proin accumsan ipsum
                  vitae eros consectetur placerat. Vivamus ultrices felis vel
                  urna finibus vestibulum. {/* {ad.description} */}
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
                <h4
                  className="card-title"
                  style={{
                    marginBottom: "2px",
                    fontFamily: "Proxima Nova",
                    fontSize: "30px",
                    color: "#159570"
                  }}
                >
                  Price: Rs. {ad.requiredAmount}
                </h4>
              </div>
            </div>
            <div
              className="card text-center mt-4"
              style={{
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                border: "0px"
              }}
            >
              <div className="card-body">
                <a href="#" className="btn btn-cz btn-lg-new btn-lg w-100">
                  <i className="fa fa-phone"></i> {ad.phone}
                </a>
                <a href="#" className="btn btn-cz btn-lg-new btn-lg mt-2 w-100">
                  <i className="fa fa-envelope"></i> Send a message
                </a>
              </div>
            </div>
            <div
              className="card text-center mt-4"
              style={{
                boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.16)",
                border: "0px"
              }}
            >
              <div className="card-body">
                <a href="#" className="btn btn-cz btn-lg-new btn-lg mt-2 w-100">
                  <i className="fa fa-info"></i> Seller Info
                </a>
                <h4
                  className="card-title mt-4"
                  style={{
                    marginBottom: "2px",
                    fontFamily: "Proxima Nova",
                    fontSize: "24px",
                    color: "#159570"
                  }}
                >
                  Name: {ad.name}
                </h4>
                <h4
                  className="card-title mt-2"
                  style={{
                    marginBottom: "2px",
                    fontFamily: "Proxima Nova",
                    fontSize: "24px",
                    color: "#159570"
                  }}
                >
                  Phone: {ad.phone}
                </h4>
              </div>
            </div>
            <div
              className="card text-center mt-4"
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

export default AdDetail;
