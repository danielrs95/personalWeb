import React from "react";
import "../styles/listItem.css";

const EducationListItemComponent = ({ year, company, title, description }) => {
  return (
    <div className='list-item-container'>
      <h6 className='LI-year'>{year}</h6>
      <h6 className='LI-company'>{company}</h6>
      <h4 className='LI-title'>{title}</h4>
      {description ? <p>{description}</p> : ""}
    </div>
  );
};

export default EducationListItemComponent;
