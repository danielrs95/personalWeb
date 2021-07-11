import React from "react";
import ListItemComponent from "./ListItemComponent";

const ExperienceComponent = () => {
  return (
    <div className='col-12'>
      <h1 className='mt-3'>Experience</h1>
      <ListItemComponent
        year='2019/10 - Current'
        title='OI - Owens Illinois'
        subtitle='Mould Design Engineer'
      />
      <ListItemComponent
        year='2018/04 - 2019/10'
        title='SIMEX SAS'
        subtitle='Mould Design Engineer'
      />
    </div>
  );
};

export default ExperienceComponent;
