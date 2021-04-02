import React from "react";
import { Card } from "react-bootstrap";

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
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='about-skills'>Skills</div>
      <div className='about-experience'>Experiencia</div>
    </div>
  );
};

export default AboutScreen;
