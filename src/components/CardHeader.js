import React from "react";
import imageCV from "../img/CV.jpg";

const CardHeader = () => {
  return (
    <div className='card-body'>
      <div className='row'>
        <div className='d-flex col-6' style={{ justifyContent: "center" }}>
          <img
            src={imageCV}
            className='w-50'
            style={{
              borderRadius: "0.75rem",
              boxShadow: "5px 5px 1.5px 0 rgb(0 0 0 / 10%)",
            }}
          ></img>
        </div>
        <div className='col-6'>
          <h1>Welcome!</h1>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
