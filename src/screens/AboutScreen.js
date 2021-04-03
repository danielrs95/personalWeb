import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import cvImg from "../img/CV.jpg";
import Skill from "../components/Skill";

const AboutScreen = () => {
  return (
    <div id='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className='about-photo'>
        <img src={cvImg} className='photo-img' />
        <div className='photo-text'>
          I'm a mechanical engineer and fullstack developer, passionate about
          programing and constant learning
        </div>
        {/* <Card style={{ width: "80%" }}>
          <Card.Img variant='top' src={cvImg} />
          <Card.Body>
            <Card.Title>Who am I?</Card.Title>
            <Card.Text>
              I'm a mechanical engineer and fullstack developer, passionate
              about programing and constant learning
            </Card.Text>
          </Card.Body>
        </Card> */}
      </div>
      <div className='about-skills'>
        <Skill skill='HTML' width='70' />
        <Skill skill='CSS' width='70' />
        <Skill skill='JavaScript' width='70' />
        <Skill skill='React & Redux' width='70' />
        <Skill skill='Node & Express' width='70' />
        <Skill skill='Mongo & Mongoose' width='70' />
        <Skill skill='Ruby & Ruby on Rails' width='70' />

        {/* <div style={{ display: "inline-block" }}>
          <p>Hola</p>
          <ProgressBar now={70} />
        </div> */}

        {/* <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node</li>
          <li>Express</li>
          <li>Mongo & Mongoose</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
        </ul> */}
      </div>
      <div className='about-experience'>Experiencia</div>
    </div>
  );
};

export default AboutScreen;
