import React from 'react';

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
    description:
      'Server-side rendering lets you optimize your applications to use client or server resources depending on network and device circumstances. Old device on a slow network? Render on the server. New device, fast network? You should probably let the client do the work. Some call the resulting architecture "universal," others "isomorphic," but the results are smooth. Learn about implementing server-side rendering, or SSR, in your React projects. Emmanuel Henri shows how to set up an SSR project with React and Next.js, add a centralized store with Redux, and configure custom routes with Express and Next.js. He wraps up the course with a discussion of code splitting, which can improve application performance.',
  },
  {
    title: 'JavaScript TestDriven Development ES6',
    autor: 'Shaun Wassell',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/javascript-test-driven-development-es6/intro-video?u=80825882',
    description:
      'TDD is one of the most hotly discussed subjects in the software development world. Even the most carefully constructed applications grow to the point where debugging and ensuring quality becomes difficult. Test-driven development (TDD) helps with this tremendously by ensuring that all parts of your application are covered by tests. In this course, Shaun Wassell explores the foundational techniques and tools for unit and integration tests. Along the way, he zooms out to examine how they all fit together. Shaun also highlights TDDs strengths and weaknesses and provides real-world examples that showcase how TDD can fit into your development workflow.',
  },
  {
    title: 'React Testing and Debugging',
    autor: 'Emmanuel Henri',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/react-testing-and-debugging/testing-and-debugging-your-react-apps?u=80825882',
    description:
      'Tracking down bugs in React—and the many different pieces it communicates with—can be a challenge. While basic JavaScript testing and debugging tools certainly work, solutions designed specifically to work with React will save you time and effort. This course covers those tools, as well as tips and techniques to help you find, diagnose, and fix problems in your apps. Watch and learn how to test React code with Jest, debug with Chrome, check type with flow, and optimize your code with ESLint. Instructor Emmanuel Henri has packaged this course with everything you need to get started, including exercise files and setup instructions, and concludes with some next steps for exploring advanced debugging in React.',
  },

  {
    title: 'Visual Studio Code for Web Developers',
    autor: 'Joe Marini',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/visual-studio-code-for-web-developers/welcome?u=80825882',
    description:
      'A great code editor is a crucial addition to any web developers arsenal of tools. In this course, learn how to make the most of Visual Studio (VS) Code—the powerful code editor from Microsoft—when working with web-based projects. Joe Marini kicks off the course by taking you through the apps user interface, and showing how to work with its basic editing features. Next, Joe demonstrates how to customize VS Code by configuring preferences, setting your own keyboard shortcuts, and working with snippets. He also explains how to maximize your productivity by installing and managing extensions from the Visual Studio Marketplace. Plus, he discusses how VS Code works with folders and collections of files, helps you understand the IntelliSense feature, and dives into the apps advanced code editing features, such as automatic formatting.',
  },
  {
    title: 'SASS Essential Training',
    autor: 'Ray Villalobos',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/sass-essential-training/welcome?u=80825882',
    description:
      'Learn the fundamentals of Syntactically Awesome Stylesheets (Sass), a modern web development language that helps you write CSS better, faster, and with more advanced features. Ray Villalobos shows you the best way to install Sass and work with its main features: variables, nesting, partials, and mixins. Plus, learn how to use SassScript to create complex functions from Sass lists and control statements.',
  },
  {
    title: 'JavaScript Avanzado 1',
    autor: 'Natalia Corea',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/javascript-avanzado-1/que-vas-a-aprender-en-este-curso-de-javascript-avanzado?u=80825882',
    description:
      'Aprende JavaScript, el lenguaje que rige la web, al nivel más avanzado. Conoce las versiones de JavaScript ES5 y ES6, cómo el lenguaje es ejecutado por el navegador y sus características más importantes, como el manejo de procesos confluyentes y estructuras de datos complejas. Domina, gracias a este curso, uno de los lenguajes más demandados en el sector y mejora significativamente tu valor como desarrollador o desarrolladora.',
  },
  {
    title: 'JavaScript Avanzado 2',
    autor: 'Natalia Corea',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/javascript-avanzado-2/que-vas-a-aprender-en-este-curso-de-javascript-avanzado?u=80825882',
    description:
      'Adquiere conocimientos avanzados de JavaScript gracias a este curso sobre patrones de programación y tecnologías avanzadas que se pueden utilizar del lado del navegador o del lado del servidor. Al terminar, sabrás todo lo relacionado con patrones de diseño, programación reactiva, manejo de datos binarios y procesamiento y almacenamiento de datos en el navegador utilizando JavaScript. Este lenguaje, imperativo y estructurado, dinámico, funcional y popular, llevará a un nuevo nivel tus posibilidades de creación en la web. No te lo pierdas.',
  },
  {
    title: 'GitHub para programadores',
    autor: 'Carlos Solís',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/github-para-programadores-2/abraza-el-potencial-de-github?u=80825882',
    description:
      'Los equipos de desarrollo modernos necesitan que muchas personas trabajen sobre un mismo código sin generar errores o conflictos. Sin embargo, sin las herramientas adecuadas, esta tarea puede ser casi imposible. Afortunadamente tenemos GitHub, un servicio de control de versiones online que te permite almacenar, gestionar y distribuir tu código. En este curso aprenderás los conceptos básicos del control de versiones Git, los servicios que ofrece GitHub, como crear, gestionar y examinar nuestros repositorios online. Descubrirás diversas formas de utilizar el servicio de GitHub y exploraremos las funciones más comunes de este servicio. Al finalizar este curso estarás a punto para trabajar tu código fuente en equipo con seguridad y la tranquilidad de tener siempre un respaldo en la nube.',
  },
  {
    title: 'Fundamentos del desarrollo web: Full Stack o Front-end',
    autor: 'Sergio Brito & Ray Villalobos',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/fundamentos-del-desarrollo-web-full-stack-o-front-end/presentacion-del-curso-fundamentos-del-desarrollo-web-full-stack-o-front-end?u=80825882',
    description:
      'Las responsabilidades principales de un desarrollador web se dividen principalmente en dos: los desarrolladores front end se especializan en sitios web y su cara al usuario final, y los back end se especializan en lo que sucede en el servidor y en el procesamiento de los datos que se envían al front. Un desarrollador full stack es aquel que busca dominar ambas ramas y en este curso aprenderás todo lo que implica ser un desarrollador web, desde las herramientas y frameworks de trabajo necesarias hasta todo lo que debes de considerar para hacerte de un buen trabajo. Descubre qué habilidades deberás poseer y mejorar para ser un profesional exitoso en la industria web.',
  },
  {
    title: 'Learning Sublime Text 3',
    autor: 'Kevin Yank',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/learning-sublime-text-3/welcome?u=80825882',
    description:
      'Sublime Text 3 is an innovative text and code editor for OS X and Windows with a thriving ecosystem of add-on packages. But some of its best features are difficult to discover. Instructor Kevin Yank takes students through the basic, not-so-basic, and downright hidden features of the editor, demonstrating how to use each tool and command to become more productive. Find out how to find and replace sections of code, bookmark your position, leverage helpful shortcuts, edit multiple lines of code simultaneously, and automate some of your work with autocompletion, snippets, and macros. Plus, learn how to tweak the appearance and configuration to make Sublime Text work best for you.',
  },
  {
    title: 'CSS con SASS esencial',
    autor: 'Jorge González Villanueva',
    university: 'LinkedIn Learning',
    certificate: '',
    link: 'https://www.linkedin.com/learning/css-con-sass-esencial/mejora-los-flujos-de-trabajo-con-css-sass?u=80825882',
    description:
      'Amplía y expande tus conocimientos sobre el preprocesador CSS SASS y mejora así tu flujo de trabajo en el desarrollo de webs complejas. Aprende, con este curso, a instalarlo e integrarlo correctamente para automatizar tu equipo y programar con todas las ventajas que ofrece. Conoce, además, todos los elementos propios del lenguaje SASS: variables, mixins, anidaciones y herencia, las sentencias condicionales y los bucles, funciones y partials, entre otros.',
  },
];

const achievementsList = [
  {
    title:
      'Design and numerical analysis of an efficient H-Darrieus vertical-axis hydrokinetic turbine',
    autor: 'Ramírez D, Rubio-Clemente A, Chica E',
    link: 'https://journal.ump.edu.my/jmes/article/view/870',
    magazine: 'Journal of Mechanical Engineering and Sciences',
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
  developerDescription,
  developerCourses,
  mechanicalDescription,
  oiDescription,
  simexDescription,
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
        <div className='card border-primary'>
          <div className='card-body'>
            <h4 className='card-title mt-0 mb-1 font-weight-bold'>
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

            {/* Experience Developer section */}

            {developerDescription ? (
              <div
                style={{
                  padding: '0.75rem 1rem 0rem',
                  color: '#000',
                }}
              >
                <p>
                  Online boot camp to train students in full-stack software
                  development with self made projects and special focus on the
                  industry leading technologies such as:
                </p>
                <ul>
                  <li>HTML & CSS</li>
                  <li>Bootstrap</li>
                  <li>Git & GitHub</li>
                  <li>Ruby</li>
                  <li>HTTP & Sinatra</li>
                  <li>Ruby on Rails</li>
                  <li>JavaScript, jQuery & AJAX</li>
                  <li>MERN: MongoDB, Express, React, NoodeJS</li>
                </ul>
              </div>
            ) : (
              <></>
            )}

            {developerCourses ? (
              <div
                className='list-group'
                style={{
                  padding: '0.75rem 1rem 0.75rem',
                }}
              >
                <h4 style={{ fontWeight: '600' }}>Related Courses</h4>
                {courseList.map((course) => (
                  <a
                    href={course.link}
                    className='list-group-item list-group-item-action'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className=''>
                      <span>
                        {course.title} - {course.autor}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <></>
            )}

            {/* Experience Mechanical section */}

            {mechanicalDescription ? (
              <div
                style={{
                  padding: '0.75rem 1rem 0rem',
                  color: '#000',
                }}
              >
                <p>
                  Mechanical engineer with theoretical and hands-on training in
                  different areas such as mould design, product life cycle &
                  project management
                </p>

                <div className='list-group'>
                  <h4 style={{ fontWeight: '600', color: '#444' }}>
                    Achievements
                  </h4>
                  {achievementsList.map((achievement) => (
                    <a
                      href={achievement.link}
                      className='list-group-item list-group-item-action'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div className=''>
                        <span className='d-block'>{achievement.title}</span>
                        <span className='ml-3'>{achievement.autor}</span>
                        <span className='ml-3 d-block'>
                          {achievement.magazine}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            {simexDescription ? (
              <div
                style={{
                  padding: '0.75rem 1rem 0rem',
                  color: '#000',
                }}
              >
                <p>
                  Mould design engineer for the cosmetic industry focusing on
                  quality products, fulfilling client, industry and company
                  standards
                </p>

                <div className='list-group'>
                  <h4 style={{ fontWeight: '600', color: '#444' }}>
                    Achievements
                  </h4>
                  <a
                    href='https://www.linkedin.com/in/daniel-ramirez-salazar-800081145/'
                    className='list-group-item list-group-item-action'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Estadística para el modelo de tolerancias de partes
                    plásticas y fundamentos en la norma DIN 16742
                  </a>
                </div>
              </div>
            ) : (
              <></>
            )}

            {oiDescription ? (
              <div
                style={{
                  padding: '0.75rem 1rem 0rem',
                  color: '#000',
                }}
              >
                <p>
                  Mould design for one of the leading glass company on the
                  industry, focusing on premium bottle market for high quality
                  and high difficulty shaped bottles
                </p>

                {/* <div className='list-group'>
                  <h4 style={{ fontWeight: '600' }}>Achievements</h4>
                  <a
                    href='#'
                    className='list-group-item list-group-item-action'
                    target='_blank'
                  >
                    Estadística para el modelo de tolerancias de partes
                    plásticas y fundamentos en la norma DIN 16742
                  </a>
                </div> */}
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
