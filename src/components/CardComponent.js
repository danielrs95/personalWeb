import React, { useEffect } from 'react';
import imageCV from '../img/CV.jpg';
import { Tooltip } from 'bootstrap';

const CardComponent = () => {
  useEffect(() => {
    //init tooltip
    Array.from(
      document.querySelectorAll('a[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));
  });

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center'>
        <div className='col-11'>
          <div
            className='card'
            style={{
              border: '0.1px solid rgb(0 0 0 / 10%)',
              borderRadius: '1.2rem',
              boxShadow: '5px 5px 1.5px 0 rgb(0 0 0 / 10%)',
            }}
          >
            <div
              className='card-header container d-flex bg-gradient justify-content-evenly align-items-center'
              style={{
                backgroundColor: '#2196f3',
                borderRadius: '1.2rem 1.2rem 0 0',
              }}
            >
              <div className='row'>
                <div className='col-12 col-lg-6 d-flex justify-content-center'>
                  <img
                    src={imageCV}
                    className='img-fluid w-50'
                    alt='...'
                    style={{
                      border: '0.1px solid rgb(0 0 0 / 10%)',
                      borderRadius: '1.2rem',
                      boxShadow: '5px 5px 1.5px 0 rgb(0 0 0 / 10%)',
                    }}
                  />
                </div>

                <div className='d-flex flex-column col-12 col-lg-6 text-center text-light justify-content-center'>
                  <h1 className='card-text fw-bold '>Daniel Ramirez</h1>
                  <div className='' style={{ fontSize: '4rem' }}>
                    <a
                      role='button'
                      className='mx-2'
                      href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145'
                      target='_blank'
                      rel='noreferrer'
                      data-bs-toggle='tooltip'
                      data-bs-placement='Bottom'
                      title='Check my linkedIn account!'
                    >
                      <i className='fab fa-linkedin link-light text-decoration-none ' />
                    </a>
                    <a
                      role='button'
                      className='mx-2'
                      href='https://github.com/danielrs95'
                      target='_blank'
                      rel='noreferrer'
                      data-bs-toggle='tooltip'
                      data-bs-placement='bottom'
                      title='Check my GitHub account!'
                    >
                      <i className='fab fa-github-square link-light text-decoration-none ' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <span>
                I'm a Mechanical Engineer & Fullstack web developer passionate
                about crafting clean, minimalistic and user-friendly websites
              </span>
              <div className='d-grid gap-2 d-lg-flex justify-content-lg-evenly mt-2'>
                <a
                  role='button'
                  href='/experience'
                  className='btn btn-outline-dark'
                >
                  Check my Experience
                </a>
                <a
                  role='button'
                  href='/portfolio'
                  className='btn btn-outline-dark'
                >
                  Check my Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
