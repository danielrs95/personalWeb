import React from "react";

const Skill = ({ skill, width }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p>skill</p>

      <div className='progress' style={{ width: "80%" }}>
        <div
          className='progress-bar'
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
