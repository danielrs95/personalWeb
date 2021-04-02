import React from "react";

const Skill = ({ skill, width }) => {
  return (
    <div className='skill-container'>
      <p>{skill}</p>

      <div className='progress' style={{ width: "50%" }}>
        <div
          className='progress-bar progress-bar-striped progress-bar-animated'
          role='progressbar'
          style={{ width: `${width}%` }}
          aria-valuenow='25'
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </div>
  );
};

export default Skill;
