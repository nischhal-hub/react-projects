import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([])
  const [number, setNumber] = useState(0);

  
  const handleSubmit=(e)=>{
    e.preventDefault();
    let constant = parseInt(number)
    if(constant<0)
      constant =1;
    else if(constant>8)
      constant=8;

    setParagraphs(data.slice(0,constant))
  }

  return (
    <>
      <section className="section-center">
        <h3>Lorem Ipsum generator</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="number">Paragraphs:</label>
          <input onChange={(e)=>setNumber(e.target.value)} type="number" id="number" name="number" />
          <button className="btn">Generate</button>
        </form>
        <div className="result">
          {paragraphs.map((para,index)=><p key={index}>{para}</p>)}
        </div>
      </section>
    </>
  );
}

export default App;
