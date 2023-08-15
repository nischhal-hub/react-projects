import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("#0f8ad7");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#0f8ad7").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      //console.log(colors);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color/Shades generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="color" onChange={(e) => setColor(e.target.value)} />
          <input
            type="text"
            value={color}
            className={error?"error":null}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          let hex = `#${color.hex}`;
          return <SingleColor key={index} {...color} hex={hex} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
