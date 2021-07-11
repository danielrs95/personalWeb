import React from "react";
import EducationComponent from "../components/EducationComponent";
import ExperienceComponent from "../components/ExperienceComponent";

const ResumeScreen = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div
          className='col-12'
          style={{
            fontSize: "2.5rem",
            fontWeight: "550",
          }}
        >
          RESUME
        </div>
        <EducationComponent />
        <ExperienceComponent />
        {/* <div className='col-12'>Software Skills</div>
        <div className='col-12'>Coding Skills</div> */}
      </div>
    </div>
  );
};

export default ResumeScreen;
