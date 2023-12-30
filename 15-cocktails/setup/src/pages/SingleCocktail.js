import React, { useState } from 'react'
import axios from 'axios'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false)
  const [drink, setDrink] = useState(null)
  const { id } = useParams();
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(`${url}${id}`)
      const { drinks } = response.data;
      console.log(drinks)
      if (drinks) {
        const { strDrink: drinkname, strDrinkThumb: image, strCategory: category, strAlcoholic: info, strGlass: glass, strInstructions: instruction, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5 } = drinks[0];
        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
        const newDrinks = { drinkname, image, category, glass, info, instruction, ingredients }
        console.log(newDrinks)
        setDrink(newDrinks)
        setLoading(false);
      }
      else {
        setDrink(null)
        setLoading(false)
      }
    } catch (error) {
      console.log(error.response)
    }

   
  }
  useEffect(() => { fetchData() }, [id]);
  if(loading){
    return <Loading />
  }
  if(!drink){
    return(<section className='section cocktail-section'>
      <h2>No item</h2>
    </section>)
  }
  else{
  const { drinkname, image, category, glass, info, instruction, ingredients } = drink;
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{drinkname}</h2>
      <div className='drink'>
        <img src={image} alt={drinkname}></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span> {drinkname}
          </p>
          <p>
            <span className='drink-data'>category :</span> {category}
          </p>
          <p>
            <span className='drink-data'>info :</span> {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span> {glass}
          </p>
          <p>
            <span className='drink-data'>instructons :</span> {instruction}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )}
}

export default SingleCocktail
