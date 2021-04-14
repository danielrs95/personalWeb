import React from "react";
import CardHeader from "../components/CardHeader";

const HomeScreen = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <CardHeader />
            <div className='card-body'>Seccion2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
