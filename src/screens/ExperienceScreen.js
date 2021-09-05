import React from 'react';
import EducationComponent from '../components/EducationComponent';
import ExperienceComponent from '../components/ExperienceComponent';
import LanguageSkillComponent from '../components/LanguageSkillComponent';
import ProgrammingSkillComponent from '../components/ProgrammingSkillComponent';

const ExperienceScreen = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <EducationComponent />
        <ExperienceComponent />
        {/* <ProgrammingSkillComponent />
        <LanguageSkillComponent /> */}
      </div>
    </div>
  );
};

export default ExperienceScreen;
