import React from "react";
import imageCV from "../img/CV.jpg";
import "../styles/cardHeader.css";

const CardHeader = () => {
  return (
    <div className='card-body background-card-header'>
      <div className='row'>
        <div className='container-img col-6'>
          <img src={imageCV} className='header-img'></img>
        </div>
        <div
          className='header-tittle col-6'
          style={{ position: "relative", top: "100px" }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            Daniel Ramirez Salazar
          </h1>

          <div className='newTooltip fab fa-linkedin'>
            <span className='tooltiptext'>Check my linkedIn account!</span>
          </div>

          {/* <a
              // title='Check my Github account!'
              href='https://github.com/danielrs95'
              target='_blank'
            >
              <i class='social-media-link fab fa-github-square'></i>
            </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
