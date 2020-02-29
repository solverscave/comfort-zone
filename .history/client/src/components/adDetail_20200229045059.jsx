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
          <Card className="my-5 py-2 rounded">
            <div className="col-12 text-center">
              <h3 className="text-center c-cz">Price: Rs. 10000</h3>
            </div>
          </Card>
          <div className="">
            <Card className="my-5 ">
              <div className="container " style={{ height: "auto" }}>
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      Call on 03073794329
                    </h4>
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      Send Message
                    </h4>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="mt-5 rounded">
              <div className="container">
                <div className="row">
                  <div className="container py-5 ">
                    <h4 class="p-3  bg-cz text-white text-center rounded">
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
