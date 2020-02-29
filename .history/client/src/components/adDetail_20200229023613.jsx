import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/button";

const AdDetail = () => {
  const [ads] = useState(" ");

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">this is col-8</div>

        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default AdDetail;
