import React from 'react';
import ListItemComponent from './ListItemComponent';

const EducationComponent = () => {
  return (
    <div className='col-12 col-lg-8 pt-5'>
      <div className='row'>
        <div className='col-auto text-center flex-column d-none d-sm-flex'>
          <div className='row h-50'>
            <div className='col'>&nbsp;</div>
            <div className='col'>&nbsp;</div>
          </div>

          <div className='m-2'>
            <i className='fas fa-circle'></i>
          </div>

          <div className='row h-50'>
            <div
              className='col'
              style={{
                borderRight: '1px solid blue',
              }}
            >
              &nbsp;
            </div>
            <div className='col'>&nbsp;</div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title text-muted mt-0 mb-1 font-weight-bold'>
                Full-Stack Web Developer
              </h4>
              <h4 className='card-title  my-0 '>Make It Real Camp</h4>
              <div className='text-muted'>
                <span>2019 - 2020</span>
                <span
                  style={{
                    padding: '0 .45rem 0 0.45rem',
                  }}
                >
                  •
                </span>
                <span>Medellin, Colombia</span>
              </div>
              <div
                style={{
                  padding: '0.75rem 1rem 0.75rem',
                  color: '#000',
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
