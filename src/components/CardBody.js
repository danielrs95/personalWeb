import React from 'react';

const CardBody = () => {
  return (
    <div className='card-body'>
      <div className='row' style={{ alignItems: 'center' }}>
        <div
          className='col-12 text-justify'
          style={{ fontWeight: 'normal', fontSize: '1rem' }}
        >
          I'm a Mechanical Engineer & Fullstack web developer passionate about
          crafting clean, minimalistic and user-friendly websites
        </div>
        <div className='col-12 col-lg-6' style={{ paddingTop: '1.25rem' }}>
          <button
            type='button'
            className='btn btn-outline-primary'
            style={{ width: '100%' }}
          >
            Check my Resume
          </button>
        </div>
        <div className='col-12 col-lg-6' style={{ paddingTop: '1.25rem' }}>
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
  );
};

export default CardBody;
