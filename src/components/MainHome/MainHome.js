import React from "react";
import HomeTab from "../HomeTab/HomeTab";
import { Form } from "react-bootstrap";
import "./MainHome.css";
import featureData from "../../fakeData/fakeData2.json";
import Feature from "../Feature/Feature";
import logo2 from "../images/logo.png";

const MainHome = () => {
  return (
    <div>
      <div className="banner">
        <div className="content">
          <h1>Best Food Waiting For Your Belly</h1>
          <div className="d-flex justify-content-center mt-4">
            <Form style={{ width: "350px" }}>
              <Form.Label htmlFor="inlineFormInputName" srOnly></Form.Label>
              <Form.Control
                id="inlineFormInputName"
                placeholder="Search Your Food..."
              />
            </Form>
            <button style={{ width: "100px" }} className="btn btn-danger ">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <HomeTab></HomeTab>
      </div>

      <div className="container  d-flex justify-content-center mt-3">
        <button className="btn btn-danger ">CHECKOUT YOUR FOOD</button>
      </div>

      <div className="container mt-5">
        <div className="featureContent">
          <h1>Why You Choose Us..?</h1>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            nulla, sint voluptate a sapiente aliquid incidunt dolore ducimus
            dolorum qui praesentium!
          </h6>
        </div>
        <div className="row d-flex justify-content-center">
          {featureData.map((ftr) => (
            <Feature ftrData={ftr} key={ftr.id}></Feature>
          ))}
        </div>
      </div>
      <div className="container-fluid homeFooter mt-3">
        <div className="row ">
          <div className="col-md-5 ml-5 mt-5 footerLogo">
            <img style={{ width: "290px" }} src={logo2} alt=""></img>
          </div>
          <div style={{ color: "white" }} className="col-md-3 mt-5">
            <p>About Online Food</p>
            <p>Read Our Blog</p>
            <p>Sign Up To Deliver</p>
            <p>Add Your Restaurant</p>
          </div>
          <div style={{ color: "white" }} className="col-md-3 mt-5">
            <p>Get Help</p>
            <p>Read FAQs</p>
            <p>View All Cities</p>
            <p>Restaurants Near Me</p>
          </div>
        </div>

        <div className="row mt-5 ">
          <div className="col-md-5 ml-5 mt-5">
            <small style={{ color: "gray" }}>copyrights©Rahat 2021,all rights reserved</small>
          </div>
          <div style={{ color: "white" }} className="col-md-2 mt-5">
            <p>Private Policy</p>
          </div>
          <div style={{ color: "white" }} className="col-md-2 mt-5">
            <p>Terms Of Use</p>
          </div>
          <div style={{ color: "white" }} className="col-md-2 mt-5">
            <p>Pricing</p>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default MainHome;
