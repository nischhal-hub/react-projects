import React, { useState, useEffect } from "react";
//import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const handleClick = ()=>{
    navigator.clipboard.writeText(hex)
    setAlert(true)
  }
  useEffect(()=>{
    const timeOut = setTimeout(()=>{setAlert(false)},3000)
    return ()=>clearTimeout(timeOut)
  },[alert])
  //const hex = rgbToHex(...rgb)
  //console.log(bcg)
  return (
    <div
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard.</p>}
    </div>
  );
};

export default SingleColor;
