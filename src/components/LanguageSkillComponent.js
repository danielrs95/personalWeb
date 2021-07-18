import React from "react";
import SkillItemComponent from "./SkillItemComponent";

const LanguageSkillComponent = () => {
  return (
    <div className='col-12'>
      <h2>Software Skills </h2>

      <SkillItemComponent skill='Spanish - Native' percentage='95' />
      <SkillItemComponent skill='English' percentage='80' />
    </div>
  );
};

export default LanguageSkillComponent;
