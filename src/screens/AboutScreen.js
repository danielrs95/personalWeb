import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import Skill from "../components/Skill";

const AboutScreen = () => {
  return (
    <div id='about'>
      <div className='about-title'>
        <h1>About me</h1>
      </div>
      <div className='about-photo'>
        <Card style={{ width: "80%" }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Who am I?</Card.Title>
            <Card.Text>
              I'm a mechanical engineer and fullstack developer, passionate
              about programing and constant learning
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='about-skills'>
        <Skill skill='HTML' width='50' />

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
