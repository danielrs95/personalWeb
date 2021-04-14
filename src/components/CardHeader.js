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
          <div
            className='btn'
            style={{
              width: "fit-content",
              border: "0.1px solid rgb(0 0 0 / 10%)",
              padding: "0.3rem 0.5rem",
              boxShadow: "3px 3px 1.5px 0 rgb(1 1 1 / 10%)",
            }}
          >
            <i class='fab fa-linkedin' style={{ fontSize: "2rem" }}></i>
          </div>
          <span>icons</span>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
