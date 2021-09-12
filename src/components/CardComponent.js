import React from 'react';
import '../styles/cardComponent.css';
import imageCV from '../img/CV.jpg';

const CardComponent = () => {
  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <div class='card'>
            <div
              class='card-header d-flex bg-gradient justify-content-evenly align-items-center'
              style={{
                backgroundColor: '#2196f3',
              }}
            >
              <div className='col-12 col-lg-6 d-flex justify-content-center'>
                <img src={imageCV} class='img-fluid w-50' alt='...' />
              </div>
              <div className='d-flex flex-column col-12 col-lg-6 text-center text-light fs-1'>
                <p class='card-text fw-bold fs-1'>Daniel Ramirez</p>
                <div className='' style={{ fontSize: '4.5rem' }}>
                  <a
                    class='fab fa-linkedin link-light text-decoration-none mx-2'
                    href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145'
                    target='_blank'
                    rel='noreferrer'
                  ></a>
                  <a
                    class='fab fa-github-square link-light text-decoration-none mx-2'
                    href='https://github.com/danielrs95'
                    target='_blank'
                    rel='noreferrer'
                  ></a>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <p>
                I'm a Mechanical Engineer & Fullstack web developer passionate
                about crafting clean, minimalistic and user-friendly websites
              </p>
              <div>
                <div
                  className='col-12 col-lg-6'
                  style={{ paddingTop: '1.25rem' }}
                >
                  <button
                    type='button'
                    className='btn btn-outline-primary'
                    style={{ width: '100%' }}
                  >
                    Check my Resume
                  </button>
                </div>
                <div
                  className='col-12 col-lg-6'
                  style={{ paddingTop: '1.25rem' }}
                >
                  <button
                    type='button'
                    className='btn btn-outline-primary'
                    style={{ width: '100%' }}
                  >
                    Check my Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
