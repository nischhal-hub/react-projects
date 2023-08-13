import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [quotes, setQuotes] = useState(data);
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    setIndex((v) => (v + 1)%quotes.length);
  };
  const handleLeft = () => {
    let newIndex = index -1;
    (newIndex<0)?setIndex(quotes.length-1):setIndex((v) => v - 1);
  };
  useEffect(()=>{
    let slide= setInterval(()=>{
      setIndex(v=>(v+1)%quotes.length)
    },3000)
    return()=>clearInterval(slide);
  })
  return (
    <>
      <main>
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span> reviews 
            </h2>
          </div>
          <div className="section-center">
            {quotes.map((people,personIndex) => {
              const { id, image, name, title, quote } = people;
              let position = "nextSlide";
              if(index === personIndex){
                position = "activeSlide"
              }
              if(personIndex === index-1 || (index === 0 && personIndex === quotes.length-1)){  //!eesma second part ma chai edi active slide ma chai index 0 xa ani personIndex jasko (quotes.length-1) xa tyo personIndex(quotes.length-1) ko class chai lastSlide hunxa vanya ho.
                position = "lastSlide"
              }
              return (
                <article key={id} className={position}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })}

            <div className="prev" onClick={handleLeft}>
              <FiChevronLeft />
            </div>
            <div className="next" onClick={handleRight}>
              <FiChevronRight />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
