import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const {removeTour, tours} = props
  return (
    <>
    <section>
      <div className="title">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      </div>
      </section>
    {tours.map((tour)=><Tour key={tour.id} removeTour={removeTour} tour={tour}/>)}
    </>
    
  );
};

export default Tours;
