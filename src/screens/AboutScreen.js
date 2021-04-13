import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import cvImg from "../img/CV.jpg";
import Skill from "../components/Skill";

const AboutScreen = () => {
  return (
    <div id='about' className='container '>
      <div className='row'>
        <div className='col-12'>
          <h1>About me</h1>
        </div>
      </div>

      <div className='row photo-about'>
        <div className='col-8 col-sm-6'>
          <div class='card'>
            <img src={cvImg} class='card-img-top' alt='...' />
            <div class='card-body'>
              <p class='card-text'>
                I'm a mechanical engineer and fullstack developer, passionate
                about programing and constant learning
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <Skill skill='HTML' width='70' />
          <Skill skill='CSS' width='70' />
          <Skill skill='JavaScript' width='70' />
          <Skill skill='React & Redux' width='70' />
          <Skill skill='Node & Express' width='70' />
          <Skill skill='Mongo & Mongoose' width='70' />
          <Skill skill='Ruby & Ruby on Rails' width='70' />
        </div>
      </div>

      <div className='row'>
        <div className='col-12'>
          <div className='col-12'>Experiencia</div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
