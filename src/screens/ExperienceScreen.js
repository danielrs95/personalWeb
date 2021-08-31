import React from 'react';
import EducationComponent from '../components/EducationComponent';
import ExperienceComponent from '../components/ExperienceComponent';
import LanguageSkillComponent from '../components/LanguageSkillComponent';
import ProgrammingSkillComponent from '../components/ProgrammingSkillComponent';

const ResumeScreen = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div
          className='col-12'
          style={{
            fontSize: '2.5rem',
            fontWeight: '550',
            color: '#2196f3',
          }}
        >
          Experience
        </div>
        <EducationComponent />
        <ExperienceComponent />
        <ProgrammingSkillComponent />
        <LanguageSkillComponent />
      </div>
    </div>
  );
};

export default ResumeScreen;
