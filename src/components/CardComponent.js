import React from "react";
import CardHeader from "../components/CardHeader";
import "../styles/cardComponent.css";
import CardBody from "./CardBody";

const CardComponent = () => {
  return (
    <div className='container card-container'>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <div className='card card-box'>
            <CardHeader />
            <CardBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
