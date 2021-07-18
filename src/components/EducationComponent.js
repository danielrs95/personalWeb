import React from "react";
import ListItemComponent from "./ListItemComponent";

const EducationComponent = () => {
  return (
    <div className='col-12'>
      <h2>Education</h2>
      <ListItemComponent
        year='2012 - 2017'
        title='University of Antioquia'
        subtitle='Mechanical Engineer'
      />
      <ListItemComponent
        year='2019 - 2020'
        title='Make It Real Camp'
        subtitle='Fullstack Web Developer'
      />
    </div>
  );
};

export default EducationComponent;
