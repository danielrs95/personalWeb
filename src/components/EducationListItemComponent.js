import React from "react";

const EducationListItemComponent = ({ year, title, subtitle }) => {
  return (
    <div className='mt-2 border-bottom'>
      <h6 className='d-inline border border-primary rounded px-2 text-muted'>
        {year}
      </h6>
      <h6 className='d-inline ml-2 text-muted'>{title}</h6>
      <h4 className='ml-3 mb-1 text-dark font-weight-bold '>{subtitle}</h4>
    </div>
  );
};

export default EducationListItemComponent;
