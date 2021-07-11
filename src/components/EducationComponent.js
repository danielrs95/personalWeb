import React from "react";

const EducationComponent = () => {
  return (
    <div className='col-12'>
      <h1>Education</h1>
      <div className=' border-bottom'>
        <h6 className='d-inline border border-primary rounded px-2 text-muted'>
          2012-2017
        </h6>
        <h6 className='d-inline ml-2 text-muted'>University of Antioquia</h6>
        <h4 className='ml-3 mb-1 text-dark font-weight-bold '>
          Mechanical Engineer
        </h4>
      </div>

      <div className='pt-2 border-bottom'>
        <h6 className='d-inline border border-primary rounded px-2 text-muted'>
          2012-2017
        </h6>
        <h6 className='d-inline ml-2 text-muted'>University of Antioquia</h6>
        <h4 className='ml-3 mb-1 text-dark font-weight-bold '>
          Mechanical Engineer
        </h4>
      </div>
      {/* <div className='progress'>
        <div
          className='progress-bar bg-info'
          role='progressbar'
          aria-valuenow='50'
          aria-valuemin='0'
          aria-valuemax='100'
          style={{ width: "80%" }}
        ></div>
      </div> */}
    </div>
  );
};

export default EducationComponent;
