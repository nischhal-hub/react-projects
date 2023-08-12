import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {id, name,job,image,text}=people[index]
  const noOfReviews = people.length
  const nextIndex=()=>{
    setIndex(v=>(v+1)%noOfReviews)
  }
  const prevIndex=()=>{
    let newIndex = index -1;
    if(newIndex<0){
      setIndex(3)
    }
    else
      setIndex(newIndex)
  }
  const randomIndex =()=>{
    let randomNumber = Math.floor(Math.random() * people.length)
    setIndex(randomNumber);
  }
  return (
    <>
      <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h2 className='author'>{name}</h2>
      <h4 className='job'>{job}</h4>
      <p className='info'>{text}</p>
      <div className="btn-container">
      <button className="prev-btn" onClick={prevIndex}><FaChevronLeft /></button>
      <button className="prev-btn" onClick={nextIndex}><FaChevronRight /></button>
      </div>
    
        <button className="random-btn" onClick={randomIndex} > Surprise me! </button>
      </article>
    </>
  );
};

export default Review;
