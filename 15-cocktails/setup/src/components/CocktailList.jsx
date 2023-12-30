import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, cocktailList} = useGlobalContext();
  if(loading){
    return <Loading />
  }
  if(cocktailList.length<=0){
    return(<>
      <h2>No items matched your search.</h2>
      
    </>)
  }
  else{
  return (
    <>
    <section className='section'>
      <div className="cocktails-center">
      
      {cocktailList.map((item)=>{
        return(
          <Cocktail key={item.id} {...item}/>
        )
      })}
      </div>
    </section>  
    </>
  )}
}

export default CocktailList
