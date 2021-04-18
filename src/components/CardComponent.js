import React from "react";
import CardHeader from "../components/CardHeader";
import "../styles/cardComponent.css";

const CardComponent = () => {
  return (
    <div className='container card-container'>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <div className='card card-box'>
            <CardHeader />
            <div className='card-body'>Seccion2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
