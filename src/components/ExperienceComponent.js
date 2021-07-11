import React from "react";
import ListItemComponent from "./ListItemComponent";

const ExperienceComponent = () => {
  return (
    <div className='col-12'>
      <h1>Education</h1>
      <ListItemComponent
        year='2012-2017'
        title='University of Antioquia'
        subtitle='Mechanical Engineer'
      />
      <ListItemComponent
        year='2019-2020'
        title='Make It Real Camp'
        subtitle='Fullstack Web Developer'
      />
    </div>
  );
};

export default ExperienceComponent;
