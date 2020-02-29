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
        </div>
      </div>
    </div>
  );
};

export default AdDetail;
