import React, { useEffect } from 'react';
import '../styles/cardComponent.css';
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
                    role='button'
                    class='fab fa-linkedin link-light text-decoration-none mx-2'
                    href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145'
                    target='_blank'
                    rel='noreferrer'
                    data-bs-toggle='tooltip'
                    data-bs-placement='Bottom'
                    title='Check my linkedIn account!'
                  ></a>
                  <a
                    role='button'
                    class='fab fa-github-square link-light text-decoration-none mx-2'
                    href='https://github.com/danielrs95'
                    target='_blank'
                    rel='noreferrer'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    title='Check my GitHub account!'
                  ></a>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <span>
                I'm a Mechanical Engineer & Fullstack web developer passionate
                about crafting clean, minimalistic and user-friendly websites
              </span>
              <div className='d-flex justify-content-evenly mt-2'>
                {/* <div className=''> */}
                <button type='button' className='w-25 btn btn-outline-primary'>
                  Check my Resume
                </button>
                {/* </div> */}
                {/* <div className=''> */}
                <button type='button' className='w-25 btn btn-outline-primary'>
                  Check my Portfolio
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
