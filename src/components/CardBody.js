import React from "react";

const CardBody = () => {
  return (
    <div className='card-body'>
      <div className='row' style={{ alignItems: "center" }}>
        <div
          className='col-8'
          style={{ fontWeight: "normal", fontSize: "1rem" }}
        >
          I'm a Mechanical Engineer & Fullstack web developer passionate about
          crafting clean, minimalistic and user-friendly experiences
        </div>
        <div className='col-2'>
          <button type='button' className='btn btn-outline-primary'>
            Check my Resume
          </button>
        </div>
        <div className='col-2'>
          <button type='button' className='btn btn-outline-primary'>
            Check my Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
