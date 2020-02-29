import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/button";

const AdDetail = () => {
  const [ads] = useState(" ");

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          this is col-8
          <div className="col-12">
            <h1>this is 12-col div</h1>
          </div>
        </div>

        <div className="col-4">
          this is col-4
          <div className="col-12">
            <h3>This div for price</h3>
          </div>
          <div className="col-12">
            <h3>This div for 2 button see below</h3>
            <div className="col-10">
              <h3>this is for phone number </h3>
            </div>
            <div className="col-10">
              <h3>this is for Message </h3>
            </div>
          </div>
          <div className="">
            <Card className="my-5 ">
              <div className="container " style={{ height: "auto" }}>
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      Seller Info
                    </h4>
                  </div>
                </div>
                <div className="container row mt-0">
                  <div className="col-4">
                    <b>Name</b>
                  </div>
                  <div className="col-8">
                    <p class="text-primary">Haris mehmood</p>
                  </div>
                </div>
                <div className="container row mt-0">
                  <div className="col-4">
                    <b>Address</b>
                  </div>
                  <div className="col-8">
                    <p class="text-primary">
                      Sector 4, street # 2 near civic center
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="">
            <Card className="mt-5 Safety-card">
              <div className="container">
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center">
                      Safety tips for transaction
                    </h4>
                    <ol>
                      <li>Use a safe location to meet seller</li>
                      <li>Avoid cash transactions</li>
                      <li>Beware of unrealistic offers</li>
                    </ol>
                    {/* <div class="clearfix">
      <a href="/safety-guide" class="pull-right" target="_blank">Learn More</a>
    </div> */}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;
