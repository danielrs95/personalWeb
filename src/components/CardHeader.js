import React from "react";
import imageCV from "../img/CV.jpg";
import Link from "react-router-dom";
import "../styles/cardHeader.css";

const CardHeader = () => {
  const openLink = (url) => {
    window.open(`${url}`);
  };

  return (
    <div className='card-body background-card-header'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-sm-12 col-lg-6 d-flex justify-content-center '>
          <img src={imageCV} className='header-img'></img>
        </div>
        <div className='col-sm-12 col-lg-6'>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2.2rem",
            }}
          >
            Daniel Ramirez Salazar
          </h1>

          <div className='d-flex' style={{ justifyContent: "space-evenly" }}>
            <a
              className='newTooltip fab fa-linkedin'
              href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145'
              target='_blank'
              // style={{ marginRight: "200px" }}
            >
              <span className='tooltiptext'>Check my linkedIn account!</span>
            </a>

            <a
              className='newTooltip fab fa-github-square'
              href='https://github.com/danielrs95'
              target='_blank'
            >
              <span className='tooltiptext'>Check my Github account!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
