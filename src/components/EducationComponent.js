import React from "react";

const EducationComponent = () => {
  return (
    <div className='col-12'>
      EducationComponent
      <div className='progress'>
        <div
          className='progress-bar bg-info'
          role='progressbar'
          aria-valuenow='50'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: "80%" }}
        ></div>
      </div>
    </div>
  );
};

export default EducationComponent;