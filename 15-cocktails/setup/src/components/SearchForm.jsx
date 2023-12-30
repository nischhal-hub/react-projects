import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTerm,setSearchTerm} = useGlobalContext();
  const [term, setTerm] = useState('')
  const searchBox = useRef('')
  useEffect(()=>{
    searchBox.current.focus();
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault();
    setSearchTerm(term)
  }
  return (
    <div className='search'>
      <div className="search-form">
        <form className='form-control' onSubmit={handleSubmit}>
          <label htmlFor="search">Search</label>
          <input type="text" name="search" value={term} onChange={(e)=>setTerm(e.target.value)} ref={searchBox}/>
          <button type='submit' className='btn'>Search</button>
        </form>
      </div>
      
    </div>
  )
}

export default SearchForm
