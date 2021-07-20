import React from "react";
import ListItemComponent from "./ListItemComponent";

const ExperienceComponent = () => {
  return (
    <div className='col-12 col-lg-6'>
      <h2 className='mt-3'>Experience</h2>
      <ListItemComponent
        year='2019/10 - Current'
        company='OI - Owens Illinois'
        title='Mould Design Engineer'
      />
      <ListItemComponent
        year='2018/04 - 2019/10'
        company='SIMEX SAS'
        title='Mould Design Engineer'
      />
    </div>
  );
};

export default ExperienceComponent;
