import React from "react";

const SkillItemComponent = ({ skill, width }) => {
  return (
    <>
      <h6 className='d-inline  text-muted text-uppercase'>{skill}</h6>
      <div className='progress'>
        <div
          className='progress-bar bg-info progress-bar-striped progress-bar-animated'
          role='progressbar'
          style={{ width: `${width}%` }}
          aria-valuenow='25'
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </>
  );
};

export default SkillItemComponent;
