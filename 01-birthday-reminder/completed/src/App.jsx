import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
     <main>
     <section className="container">
        <header>
          <h3>{people.length} Birthdays today.</h3>
        </header>
        <div className="lists">
          {people.map(person=><List key={person.id} name={person.name} age={person.age} image={person.image} />)}
        </div>
        <button onClick={()=>setPeople([])}> Clear all </button>
      </section>
     </main>
    </>
  );
}

export default App;
