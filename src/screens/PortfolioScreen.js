import React from 'react';
import mernImg from '../img/mern_homeScreen.png';
import moviesImg from '../img/togetheater.png';
import magicPollsImg from '../img/magicPolls.png';

const PortfolioScreen = () => {
  return (
    <div className='container mt-2'>
      <div className='row row-cols-1 row-cols-md-2 g-4 justify-content-center '>
        <div className='col'>
          {/* <h1 className='mb-3 font-weight-bold' style={{ color: '#2196f3' }}>
            Portfolio
          </h1> */}

          {/* eCommerce APP */}
          <div className='card h-100 border-primary'>
            <img
              src={mernImg}
              className='card-img-top '
              alt='eCommerce image'
              style={{ padding: '1.25rem' }}
            />
            <div className='card-body'>
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
                  className='btn btn-outline-dark'
                  target='_blank'
                  rel='noreferrer'
                >
                  Go to website
                </a>
                <a
                  href='https://www.linkedin.com/posts/daniel-ramirez-salazar-800081145_mernstack-mernstackdeveloper-javascripts-activity-6775193520903897088-DI71'
                  className='btn btn-outline-dark'
                  target='_blank'
                  rel='noreferrer'
                >
                  Video showcasing the app
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Movies APP */}
        <div className='col'>
          <div className='card h-100 border-primary '>
            <img
              src={moviesImg}
              className='card-img-top '
              alt='movies app image'
              style={{ padding: '1.25rem' }}
            />
            <div className='card-body '>
              <h5 className='card-title'>Togetheater</h5>
              <p className='card-text'>
                Movies application made with React, Node, Express & MondoDB.
                This app fetch data from TMDB API, showing movies that are:{' '}
              </p>
              <ul>
                <li>Trending</li>
                <li>Now Playing</li>
                <li>Popular</li>
                <li>Top Rated</li>
                <li>Upcoming</li>
                <li>Wishlist movies only if the user is registered</li>
              </ul>
              <div className='d-flex justify-content-around'>
                <a
                  href='https://togetheater.herokuapp.com/'
                  className='btn btn-outline-dark'
                  target='_blank'
                  rel='noreferrer'
                >
                  Go to website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Polls App */}
        <div className='col'>
          <div className='card h-100 border-primary '>
            <img
              src={magicPollsImg}
              className='card-img-top '
              alt='movies app image'
              style={{ padding: '1.25rem' }}
            />
            <div className='card-body '>
              <h5 className='card-title'>Magic Polls</h5>
              <p className='card-text'>
                Polls application made with Express & MongoDB, to make basic
                polls, no registration needed for vote :{' '}
              </p>

              <div className='d-flex justify-content-around'>
                <a
                  href='https://magicpolls.herokuapp.com/'
                  className='btn btn-outline-dark'
                  target='_blank'
                  rel='noreferrer'
                >
                  Go to website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioScreen;
