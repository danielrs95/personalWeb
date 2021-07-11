import React from "react";
import ListItemComponent from "./ListItemComponent";

const EducationComponent = () => {
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
      {/* <div className='progress'>
        <div
          className='progress-bar bg-info'
          role='progressbar'
          aria-valuenow='50'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: "80%" }}
        ></div>
      </div> */}
    </div>
  );
};

export default EducationComponent;
