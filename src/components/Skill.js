import React from "react";

const Skill = ({ skill, width }) => {
  return (
    <div className='row' style={{ margin: "5px 0px" }}>
      <div className='col-12'>
        <p style={{ margin: "0" }}>{skill}</p>
        <div className='progress' style={{ width: "100%" }}>
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
    </div>
  );
};

export default Skill;
