import React from "react";
import EducationListItemComponent from "./EducationListItemComponent";

const EducationComponent = () => {
  return (
    <div className='col-12'>
      <h1>Education</h1>
      <EducationListItemComponent
        year='2012-2017'
        title='University of Antioquia'
        subtitle='Mechanical Engineer'
      />
      <EducationListItemComponent
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
