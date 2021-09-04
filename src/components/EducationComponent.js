import React from 'react';
import ListItemComponent from './ListItemComponent';

const EducationComponent = () => {
  return (
    <div className='col-12 col-lg-8 pt-5'>
      <h1 className='mb-3'>Education </h1>
      <ListItemComponent
        topLine
        bottomLine
        dotFill
        title='Full-Stack Web Developer'
        university='Make It Real Camp'
        year='2019 - 2020'
        city='Medellin, Antioquia'
        developerDescription
        developerCourses
      />
      <ListItemComponent
        topLine
        title='Mechanical Engineer'
        university='University of Antioquia'
        year='2012 - 2017'
        city='Medellin, Antioquia'
        mechanicalDescription
      />
    </div>
  );
};

export default EducationComponent;
