import React from 'react';
import CardHeader from '../components/CardHeader';
import '../styles/cardComponent.css';
import CardBody from './CardBody';
import imageCV from '../img/CV.jpg';

const CardComponent = () => {
  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <div class='card'>
            <div class='card-header bg-primary bg-gradient d-flex justify-content-evenly align-items-center'>
              <div className='col-12 col-lg-6 d-flex justify-content-center'>
                <img src={imageCV} class='img-fluid w-75' alt='...' />
              </div>
              <div className='d-flex flex-column col-12 col-lg-6 text-center text-light fs-1'>
                <p class='card-text  fw-bold '>Daniel Ramirez</p>
                <div className=''>
                  <i class='fab fa-linkedin'></i>
                  <i class='fab fa-github-square'></i>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <p>Hola</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
