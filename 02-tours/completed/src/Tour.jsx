import React, { useState } from 'react';

const Tour = (props) => {
  const {removeTour, tour} = props
  const [isSelected , setIsSelected] = useState(false)

  const handleClick = ()=>{
    setIsSelected(v=>!v)
  }
  
  const{id,image, info, price,name}= tour
  return (
    <>
    <article className='single-tour'>
      <img src={image} alt="place" />
      <footer>
      <div className="tour-info">
        <h4>{name}</h4>
       
        <h4 className='tour-price'>${price}</h4>
      </div>
     {isSelected && <p>{info}</p>}
      <button onClick={handleClick}>Read more</button>
      <button className='delete-btn' onClick={()=>removeTour(id)}>Not interested</button>
      </footer>
      
    </article>
    </>
  );
};

export default Tour;
