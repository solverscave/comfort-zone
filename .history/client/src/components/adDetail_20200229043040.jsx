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
          <div className="container col-12">
            <Card className="mt-4  rounded">
              <div className="col-10 ">
                <a
                  href="tel:123-456-7890"
                  class="btn bg-cz btn-lg px-5 py-3 m-3 align-middle text-white"
                  role="button"
                  aria-pressed="true"
                >
                  {" "}
                  03073794329
                </a>
              </div>
              <div className="col-10">
                <a
                  href="mailto:harismehmood112@gmail.com"
                  class="btn bg-cz btn-lg px-5 py-3 m-3 align-middle text-white"
                  role="button"
                  aria-pressed="true"
                >
                  {" "}
                  Send Message
                </a>
              </div>
            </Card>
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
                    <b className="c-cz">Name</b>
                  </div>
                  <div className="col-8">
                    <p class="c-cz">Haris mehmood</p>
                  </div>
                </div>
                <div className="container row mt-0">
                  <div className="col-4">
                    <b className="c-cz">Address</b>
                  </div>
                  <div className="col-8">
                    <p class="c-cz">Sector 4, street # 2 near civic center</p>
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
