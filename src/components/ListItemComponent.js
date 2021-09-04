import React from 'react';
import '../styles/listItem.css';

const ListItemComponent = ({
  topLine,
  dotFill,
  bottomLine,
  title,
  university,
  year,
  city,
  description,
}) => {
  return (
    <div className='row'>
      <div className='col-auto text-center flex-column d-none d-sm-flex'>
        {/* Primer linea del indicador, si existe la prop topLine no la muestra */}
        <div className='row h-50'>
          {topLine ? (
            <>
              <div
                className='col'
                style={{
                  borderRight: '1px solid #2196f3',
                }}
              >
                &nbsp;
              </div>
              <div className='col'>&nbsp;</div>
            </>
          ) : (
            <>
              <div className='col'>&nbsp;</div>
              <div className='col'>&nbsp;</div>
            </>
          )}
        </div>

        <div className='m-2'>
          {dotFill ? (
            <i className='fas fa-circle' style={{ color: '#2196f3' }}></i>
          ) : (
            <i className='far fa-circle' style={{ color: '#2196f3' }}></i>
          )}
        </div>

        <div className='row h-50'>
          {bottomLine ? (
            <>
              <div
                className='col'
                style={{
                  borderRight: '1px solid #2196f3',
                }}
              >
                &nbsp;
              </div>
              <div className='col'>&nbsp;</div>
            </>
          ) : (
            <>
              <div className='col'>&nbsp;</div>
              <div className='col'>&nbsp;</div>
            </>
          )}
        </div>
      </div>

      <div className='col mb-4'>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title text-muted mt-0 mb-1 font-weight-bold'>
              {title ? title : <> Title prop</>}
            </h4>
            <h4 className='card-title  my-0 '>
              {university ? university : <>Make It Real Camp</>}
            </h4>
            <div className='text-muted'>
              <span>{year ? year : <>2019 - 2020</>}</span>
              <span
                style={{
                  padding: '0 .45rem 0 0.45rem',
                }}
              >
                •
              </span>
              <span>{city ? city : <>Ingresar Ciudad</>}</span>
            </div>
            <div
              style={{
                padding: '0.75rem 1rem 0.75rem',
                color: '#000',
              }}
            >
              {description ? description : <>Add Descripcion</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemComponent;
