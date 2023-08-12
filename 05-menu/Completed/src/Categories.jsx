import React from 'react';

const Categories = ({filterMenu, categories}) => {
  let i=0;
  return (
    <>
    <div className="btn-container">
      <button className="filter-btn" onClick={()=>filterMenu('all')}>All</button>
      {categories.map(category=>{
        let item = category;
        //console.log(item)
        return(
          <button key={i++}className="filter-btn" onClick={()=>filterMenu(item)}>{category}</button>
        )
      })}
    </div>
    </>
  );
};

export default Categories;
