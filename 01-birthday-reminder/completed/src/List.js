import React from 'react';

const List = (props) => {
  const {name, age, image} = props
  return (
    <>
      <div className="person">
            <img src={image} alt="avatar" />
            <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            </div>
          </div>
    </>
  );
};

export default List;
