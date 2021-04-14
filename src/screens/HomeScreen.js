import React from "react";
import CardHeader from "../components/CardHeader";

const HomeScreen = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-12'>
          <div
            className='card'
            style={{
              border: "0.1px solid rgb(0 0 0 / 10%)",
              borderRadius: "0.75rem",
              boxShadow: "5px 5px 1.5px 0 rgb(1 1 1 / 10%)",
            }}
          >
            <CardHeader />
            <div className='card-body'>Seccion2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
