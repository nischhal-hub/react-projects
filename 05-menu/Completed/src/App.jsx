import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const category = [...new Set(items.map(item=>item.category))];//*[...//code] it converts object returned form //code into array
  console.log(category)
  const [foodItems, setFoodItems] = useState(items)
  const [categories, setCategories]= useState(category)
  const filterMenu = (category)=>{
    if(category === 'all'){
      setFoodItems(items)
      return;
    }
    else{
    let newMenu = items.filter(item=>item.category === category )
    setFoodItems(newMenu)
    return;}
  }
  return (
    <>
    <main>
      <section className='menu'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className="underline"></div>
      </div>
        <Categories filterMenu={filterMenu} categories={categories}/>
        <Menu foods = {foodItems}/>
      </section>
    </main>
    </>
  );
}

export default App;
