import React from 'react';
import { Card } from "react-bootstrap";
import './Lunch.css';

const Lunch = (props) => {
  const {lunchImg,lunchName,lunchPrice} = props.foodL
    return (
        <div className="mt-5 lunch team ml-5 mb-4 col-md-3">
        <Card
          style={{ width: "15rem", border: "none", background: "none" }}
        >
          <Card.Body
            className="lunchBody"
           
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={lunchImg}
            />
            <Card.Title className="mt-3 text-center">
              {lunchName}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <h4 style={{ color: "black" }}>$ {lunchPrice}</h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Lunch;