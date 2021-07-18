import React from "react";

const SoftwareSkillsComponent = () => {
  return (
    <div className='col-12'>
      <h2>Software Skills </h2>

      <h6 className='d-inline  text-muted text-uppercase'>
        {" "}
        Microsoft Word/Excel
      </h6>

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

export default SoftwareSkillsComponent;
