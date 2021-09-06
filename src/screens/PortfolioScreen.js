import React from 'react';
import mernImg from '../img/mern_homeScreen.png';
import moviesImg from '../img/togetheater.png';

const PortfolioScreen = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-10 pt-5'>
          <h1 className='mb-3 font-weight-bold' style={{ color: '#2196f3' }}>
            Portfolio
          </h1>

          <div className='card-deck'>
            <div className='card border-primary mr-2'>
              <img src={mernImg} className='card-img-top p-3' alt='...' />
              <div className='card-body '>
                <h5 className='card-title'>eCommerce</h5>
                <p className='card-text'>
                  eCommerce application coded with React, Redux, Node, Express &
                  MondoDB. Some of the build in functionality are:
                </p>
                <ul>
                  <li>
                    Full featured shopping cart with PayPal & credit/debit
                    payments
                  </li>
                  <li>Product rating & review system</li>
                  <li>Product search, carousel, pagination & more</li>
                  <li>Admin interface for product, user & order management</li>
                </ul>
                <div className='d-flex justify-content-around'>
                  <a
                    href='https://merncommercedny.herokuapp.com/'
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Go to website
                  </a>
                  <a
                    href='https://www.linkedin.com/posts/daniel-ramirez-salazar-800081145_mernstack-mernstackdeveloper-javascripts-activity-6775193520903897088-DI71'
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Video showcasing the app
                  </a>
                </div>
              </div>
            </div>
            <div className='card border-primary ml-2'>
              <img src={moviesImg} className='card-img-top p-3' alt='...' />
              <div className='card-body '>
                <h5 className='card-title'>eCommerce</h5>
                <p className='card-text'>
                  eCommerce application coded with React, Redux, Node, Express &
                  MondoDB. Some of the build in functionality are:
                </p>
                <ul>
                  <li>
                    Full featured shopping cart with PayPal & credit/debit
                    payments
                  </li>
                  <li>Product rating & review system</li>
                  <li>Product search, carousel, pagination & more</li>
                  <li>Admin interface for product, user & order management</li>
                </ul>
                <div className='d-flex justify-content-around'>
                  <a
                    href='https://merncommercedny.herokuapp.com/'
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Go to website
                  </a>
                  <a
                    href='https://www.linkedin.com/posts/daniel-ramirez-salazar-800081145_mernstack-mernstackdeveloper-javascripts-activity-6775193520903897088-DI71'
                    className='btn btn-primary'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Video showcasing the app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
