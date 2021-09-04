import React from 'react';
import ListItemComponent from './ListItemComponent';

const EducationComponent = () => {
  return (
    <div className='col-12 col-lg-8 pt-5'>
      <ListItemComponent
        bottomLine
        dotFill
        title='Full-Stack Web Developer'
        university='Make It Real Camp'
        year='2019 - 2020'
        city='Medellin, Antioquia'
        description=''
      />
      <ListItemComponent
        topLine
        title='Mechanical Engineer'
        university='University of Antioquia'
        year='2012 - 2017'
        city='Medellin, Antioquia'
        description=''
      />
    </div>
  );
};

export default EducationComponent;
