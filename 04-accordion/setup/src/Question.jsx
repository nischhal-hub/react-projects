import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [isExpand, setIsExpand] = useState(false)
  const handleClick = ()=>{
    setIsExpand(v=>!v)
  }
  return (
    <>
    <article className='question'>
      <header>
        <h4>{title}</h4>
      <span className='btn'onClick={handleClick}>{isExpand?<AiOutlineMinus />:<AiOutlinePlus />}</span>
      </header>
      {isExpand && <p>{info}</p>}
    </article>
    </>
  );
};

export default Question;
