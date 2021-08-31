import React from 'react';
import ListItemComponent from './ListItemComponent';

const EducationComponent = () => {
  return (
    <div className='col-12 col-lg-8'>
      <div className='row'>
        <div className='col-auto'>indicador</div>

        <div className='col '>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title text-muted mt-0 mb-1 font-weight-bold'>
                Full-Stack Web Developer
              </h4>
              <h4 className='card-title  my-0 '>Make It Real Camp</h4>
              <div className='text-muted'>
                <span>2019-2020</span>
                <span>Medellin, Colombia</span>
              </div>
              <div
                className='card-text'
                style={{
                  padding: '0.75rem 1rem 0.75rem',
                }}
              >
                Descripcion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
