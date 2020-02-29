import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/button";

const AdDetail = () => {
  const [ads] = useState(" ");

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="col-12">
            <h1>this is 12-col div unser col-8</h1>
            <Card>
              <Card.Body className="Safety-card">
                <Card.Text className="">
                  <h1 className=""> Classic red bike for sale </h1>
                </Card.Text>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="data:image/jpeg;base64,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"
                style={{ height: 500, width: "100%", overflow: "hidden" }}
              />
            </Card>
          </div>
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
                      <i class="fa fa-phone"></i>{" "}
                      <a href="tel:03073794329" className="text-white">
                        03073794329
                      </a>
                    </h4>
                    <h4 class="p-3  bg-cz text-white text-center rounded">
                      <i class="fa fa-envelope mr5"></i>{" "}
                      <a
                        href="mailto:harismehmmood112@gmail.com"
                        className="text-white"
                      >
                        Send Message
                      </a>
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
