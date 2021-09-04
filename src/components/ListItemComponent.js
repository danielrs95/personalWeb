import React from 'react';
import TextTruncate from 'react-text-truncate';
import '../styles/listItem.css';

const courseList = [
  {
    title: 'React Hooks',
    autor: 'Eve Porcello',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/react-hooks/understanding-modern-react?u=80825882',
    description:
      'React Hooks embed logic into functions in new React applications. In this course, instructor Eve Porcello covers various styles of Hooks usage and ways to integrate them into your programming workflow. She tells you how Hooks came to be part of the library, then walks you through how to install Create React App. Eve covers how you can use the useState Hook to handle different types of state variables and work with component trees. The useEffect Hook can be used for several application side effects, whenever the state of the app changes. Eve teaches you how to work with the dependency array effect and fetch data with the useEffect Hook. Next, she explains several additional Hooks and steps through the process of creating custom Hooks. In conclusion, Eve shows you some different directions you can pursue to improve your knowledge of the React ecosystem.',
  },
  {
    title: 'React Server-Side Rendering',
    autor: 'Emmanuel Henri',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/react-server-side-rendering-8539269/learn-server-side-rendering-with-react?u=80825882',
  },
  {
    title: 'JavaScript TestDriven Development ES6',
    autor: 'Shaun Wassell',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=80825882',
  },
  {
    title: 'React Testing and Debugging',
    autor: 'Emmanuel Henri',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=80825882',
  },

  {
    title: 'Visual Studio Code for Web Developers',
    autor: 'Joe Marini',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/visual-studio-code-for-web-developers/welcome?u=80825882',
  },
  {
    title: 'SASS Essential Training',
    autor: 'Ray Villalobos',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/sass-essential-training/welcome?u=80825882',
  },
  {
    title: 'JavaScript Avanzado 1',
    autor: 'Natalia Corea',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/javascript-avanzado-1/que-vas-a-aprender-en-este-curso-de-javascript-avanzado?u=80825882',
  },
  {
    title: 'JavaScript Avanzado 2',
    autor: 'Natalia Corea',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/javascript-avanzado-2/que-vas-a-aprender-en-este-curso-de-javascript-avanzado?u=80825882',
  },
  {
    title: 'GitHub para programadores',
    autor: 'Carlos Solís',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/github-para-programadores-2/abraza-el-potencial-de-github?u=80825882',
  },
  {
    title: 'Fundamentos del desarrollo web: Full Stack o Front-end',
    autor: 'Sergio Brito & Ray Villalobos',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/fundamentos-del-desarrollo-web-full-stack-o-front-end/presentacion-del-curso-fundamentos-del-desarrollo-web-full-stack-o-front-end?u=80825882',
  },
  {
    title: 'Learning Sublime Text 3',
    autor: 'Kevin Yank',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/learning-sublime-text-3/welcome?u=80825882',
  },
  {
    title: 'CSS con SASS esencial',
    autor: 'Jorge González Villanueva',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/css-con-sass-esencial/mejora-los-flujos-de-trabajo-con-css-sass?u=80825882',
  },
];

const ListItemComponent = ({
  topLine,
  dotFill,
  bottomLine,
  title,
  university,
  year,
  city,
  description,
  courses,
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

            {courses ? (
              <div class='list-group'>
                {courseList.map((course) => (
                  <a
                    href={course.link}
                    class='list-group-item list-group-item-action'
                    target='_blank'
                  >
                    <div class='d-flex w-100 justify-content-between'>
                      <h5 class='mb-1' style={{ fontWeight: '600' }}>
                        {course.title}
                      </h5>
                      <small>{course.university}</small>
                    </div>
                    <p class='mb-1'>{course.autor}</p>
                    <TextTruncate
                      line={2}
                      element='span'
                      truncateText='...'
                      text={course.description}
                    />
                    {/* <small>{course.description}</small> */}
                  </a>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemComponent;
