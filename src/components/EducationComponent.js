import React from "react";
import ListItemComponent from "./ListItemComponent";

const EducationComponent = () => {
  return (
    <div className='col-12'>
      <h2>Education</h2>
      <ListItemComponent
        year='2012 - 2017'
        company='University of Antioquia'
        title='Mechanical Engineer'
      />
      <ListItemComponent
        year='2019 - 2020'
        company='Make It Real Camp'
        title='Fullstack Web Developer'
      />
    </div>
  );
};

export default EducationComponent;
