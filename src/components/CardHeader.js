import React from "react";
import imageCV from "../img/CV.jpg";

const CardHeader = () => {
  return (
    <div
      className='card-body background-card-header'
      style={{
        color: "white",
        // background: "rgb(33,147,176)",
        // background:
        //   "linear-gradient(45deg, rgba(33,147,176,1) 0%, rgba(33,206,243,1) 100%)",
      }}
    >
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
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
            Daniel Ramirez
          </h1>
          <h2 style={{ textAlign: "center" }}>Mechanical Engineer</h2>
          <h2 style={{ textAlign: "center" }}>Fullstack Web Developer</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20px",
            }}
          >
            <i class='social-media-link fab fa-linkedin'></i>
            <i class='social-media-link fab fa-github-square'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
