import React, { useState } from "react";

const AdDetail = () => {
  const [ads] = useState(" ");

  return (
    <div>
      <h1>Ads details</h1>
      <Card className="bg-dark text-white">
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default AdDetail;
