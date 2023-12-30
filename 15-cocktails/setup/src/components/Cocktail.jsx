import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,alcoholic,category,image,glass}) => {
  return(
    <>
      <div className="cocktail">
        <img src={image} alt={name} />
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{alcoholic}</p>
          <button className='btn-primary'><Link to={`cocktail/${id}`}>See more</Link></button>
        </div>
      </div>
    </>
  )
}

export default Cocktail
