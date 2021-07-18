import React from "react";
import SkillItemComponent from "./SkillItemComponent";

const SoftwareSkillsComponent = () => {
  return (
    <div className='col-12'>
      <h2>Software Skills </h2>

      <SkillItemComponent skill='Excel' width='80' />
    </div>
  );
};

export default SoftwareSkillsComponent;
