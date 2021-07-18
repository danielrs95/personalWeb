import React from "react";

const SkillItemComponent = ({ skill, percentage }) => {
  return (
    <>
      <h6 className='d-inline  text-muted text-uppercase'>
        {skill} - {percentage}%
      </h6>
      <div className='progress'>
        <div
          className='progress-bar  progress-bar-striped progress-bar-animated'
          role='progressbar'
          style={{ width: `${percentage}%`, backgroundColor: "#4caf50" }}
          aria-valuenow='25'
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </>
  );
};

export default SkillItemComponent;
