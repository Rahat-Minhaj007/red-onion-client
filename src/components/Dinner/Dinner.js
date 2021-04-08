import React from 'react';
import { Card } from "react-bootstrap";
import './Dinner.css';

const Dinner = (props) => {
  const {dinnerImg,dinnerName,dinnerPrice} = props.foodD
    return (
        <div className="mt-5 dinner team ml-5 mb-4 col-md-3">
        <Card
          style={{ width: "15rem", border: "none", background: "none" }}
        >
          <Card.Body
            className="dinnerBody"
            
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={dinnerImg}
            />
            <Card.Title className="mt-3 text-center">
              {dinnerName}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <h4 style={{ color: "black" }}>$ {dinnerPrice}</h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default Dinner;