import React from 'react';

const LateralHeader = () => {
  return (
    <nav className='lateral-navbar'>
      <ul className='lateral-navbar-nav'>
        {/* <li className='logo'>
          <a href='#' className='lateral-nav-link'>
            <span className='link-text logo-text'>Fireship</span>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='angle-double-right'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
          </a>
        </li> */}

        <li className='lateral-nav-item'>
          <a href='#home' className='lateral-nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='home'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
              className='svg-inline--fa fa-home fa-w-18 fa-2x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
            <span className='link-text'>Home</span>
          </a>
        </li>

        <li className='lateral-nav-item'>
          <a href='#about' className='lateral-nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='user-tie'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              className='svg-inline--fa fa-user-tie fa-w-14 fa-2x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M191.35 414.77L208 344l-32-56h96l-32 56 16.65 70.77L224 480zM224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M319.8 288.6L224 480l-95.8-191.4C56.9 292 0 350.3 0 422.4V464a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
            <span className='link-text'>About</span>
          </a>
        </li>

        <li className='lateral-nav-item'>
          <a href='#porftolio' className='lateral-nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='briefcase'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='svg-inline--fa fa-briefcase fa-w-16 fa-2x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M320 288h192v144c0 25.6-22.4 48-48 48H48c-25.6 0-48-22.4-48-48V288h192v48a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M464 128h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
            <span className='link-text'>Portfolio</span>
          </a>
        </li>

        <li className='lateral-nav-item'>
          <a href='#contact' className='lateral-nav-link'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fad'
              data-icon='envelope-open-text'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              className='svg-inline--fa fa-envelope-open-text fa-w-16 fa-2x'
            >
              <g className='fa-group'>
                <path
                  fill='currentColor'
                  d='M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z'
                  className='fa-secondary'
                ></path>
                <path
                  fill='currentColor'
                  d='M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a80,80,0,0,1-46.9-15.2L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z'
                  className='fa-primary'
                ></path>
              </g>
            </svg>
            <span className='link-text'>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default LateralHeader;
