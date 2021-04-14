import React from "react";
import imageCV from "../img/CV.jpg";

const CardHeader = () => {
  return (
    <div className='card-body'>
      <div className='row'>
        <div className='d-flex justify-content-center col-6'>
          <img
            src={imageCV}
            className='w-50'
            style={{
              borderRadius: "0.75rem",
              boxShadow: "5px 5px 1.5px 0 rgb(0 0 0 / 10%)",
            }}
          ></img>
        </div>
        <div className='d-flex flex-column justify-content-center col-6'>
          <h1 style={{ fontWeight: "bold" }}>Welcome!</h1>
          <h3>
            My name is Daniel Ramirez
            <br />
            <br />
            I'm a Mechanical Engineer & Fullstack Web Developer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
