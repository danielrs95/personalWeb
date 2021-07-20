import React from "react";
import SkillItemComponent from "./SkillItemComponent";

const ProgrammingSkillComponent = () => {
  return (
    <div className='col-12 col-lg-6'>
      <h2 className='mt-3'>Programming Skills </h2>

      <SkillItemComponent skill='HTML' percentage='70' />
      <SkillItemComponent skill='CSS' percentage='70' />
      <SkillItemComponent skill='Bootstrap' percentage='70' />
      <SkillItemComponent skill='Git & Github' percentage='60' />
      <SkillItemComponent skill='JavaScript' percentage='70' />
      <SkillItemComponent skill='MERN' percentage='60' />
      <SkillItemComponent skill='Ruby' percentage='50' />
    </div>
  );
};

export default ProgrammingSkillComponent;
