import React from "react";
import "../styles/ListItem.css";

const EducationListItemComponent = ({ year, title, subtitle, description }) => {
  return (
    <div className=' list-item-container'>
      <h6
        className='d-inline rounded px-2 text-muted'
        style={{ border: "1px solid #4caf50 " }}
      >
        {year}
      </h6>
      <h6 className='d-inline ml-2 text-muted '>{title}</h6>
      <h4 className='ml-3 mb-1 mt-1 text-dark font-weight-bold '>{subtitle}</h4>
      {description ? <p>{description}</p> : ""}
    </div>
  );
};

export default EducationListItemComponent;
