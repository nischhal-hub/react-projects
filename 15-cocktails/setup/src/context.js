import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [cocktailList, setcocktailList] = useState([])
  const [searchTerm, setSearchTerm] = useState('a')
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios(`${url}${searchTerm}`)
      const { drinks } = response.data
      if (drinks) {
        const newList = drinks.map((drink) => {
          const { idDrink, strDrink, strAlcoholic, strCategory, strDrinkThumb, strGlass } = drink
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            category: strCategory,
            image: strDrinkThumb,
            glass: strGlass
          }
        }
        )
        setcocktailList(newList);
        setLoading(false);
      } else {
        setcocktailList([])
        setLoading(false)
      }
      
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData();
  }, [searchTerm])
  return <AppContext.Provider value={{ loading, setLoading, cocktailList, searchTerm, setSearchTerm }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }






