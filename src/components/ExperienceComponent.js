import React from 'react';
import ListItemComponent from './ListItemComponent';

const ExperienceComponent = () => {
  return (
    <div className='col-12 col-lg-8 pt-5'>
      <h1 className='mb-3 font-weight-bold'>Experience </h1>
      <ListItemComponent
        topLine
        bottomLine
        dotFill
        title='Mould Design Engineer'
        university='O-I Glass'
        year='Oct 2019 - Present'
        city='Medellin, Antioquia'
        oiDescription
      />
      <ListItemComponent
        topLine
        title='Mould Design Engineer'
        university='SIMEX S.A.S'
        year='Apr 2018 - Oct 2019'
        city='Medellin, Antioquia'
        simexDescription
      />
    </div>
  );
};

export default ExperienceComponent;
