import React from 'react';
import { Card } from "react-bootstrap";
import './BreakFast.css';

const BreakFast = (props) => {
  const {breakImg,breakName,breakPrice} = props.foodB
    return (
        <div className="mt-5 breakFast team ml-5 mb-4 col-md-3">
        <Card
          style={{ width: "15rem", border: "none", background: "none" }}
        >
          <Card.Body
            className="breakFastBody"
           
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={breakImg}
            />
            <Card.Title className="mt-3 text-center">
              {breakName}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <h4 style={{ color: "black" }}>$ {breakPrice}</h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default BreakFast;