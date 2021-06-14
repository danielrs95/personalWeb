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

          <div
            className='newTooltip fab fa-linkedin'
            style={{ marginRight: "100px" }}
            // onClick={openLink(
            //   "https://www.linkedin.com/in/daniel-ramirez-salazar-800081145/"
            // )}
          >
            <span className='tooltiptext'>Check my linkedIn account!</span>
          </div>

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
  );
};

export default CardHeader;
