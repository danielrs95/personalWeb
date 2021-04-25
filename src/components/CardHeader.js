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
        <div className='header-tittle col-6'>
          <h1 style={{ fontWeight: "bold" }}>Daniel Ramirez Salazar</h1>
          {/* <h2>Mechanical Engineer</h2>
          <h2>Fullstack Web Developer</h2> */}
          <div className='social-media-container'>
            <a
              title='Check my LinkedIn profile!'
              href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145/'
              target='_blank'
            >
              <i className='social-media-link fab fa-linkedin'></i>
            </a>
            <a
              title='Check my Github account!'
              href='https://github.com/danielrs95'
              target='_blank'
            >
              <i class='social-media-link fab fa-github-square'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
