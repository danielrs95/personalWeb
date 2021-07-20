import React from "react";
import SkillItemComponent from "./SkillItemComponent";

const LanguageSkillComponent = () => {
  return (
    <div className='col-12 col-lg-6'>
      <h2 className='mt-3'>Language Skills </h2>

      <SkillItemComponent skill='Spanish - Native' percentage='95' />
      <SkillItemComponent skill='English' percentage='80' />
    </div>
  );
};

export default LanguageSkillComponent;
