import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  const getTours = async ()=>{
    try{
      const response = await fetch(url);
      const data = await response.json();
      setTours(data)
      setIsLoading(false)
    }
    catch(error){
      setIsLoading(false)
      console.log(error)
    }
  }

  const removeTour = (id)=>{
    let newTours = tours.filter(tour=>tour.id !== id)
    setTours(newTours)
  }
  useEffect(()=>{
    getTours();
  },[])
  if(isLoading){
    return <Loading />
  }
  if(tours.length === 0){
    return(<>
      <div className="title">
        <h1>No tours available</h1>
        <button className='btn' onClick={()=>getTours()}>Refresh</button>
      </div>
    </>)
  }
  return (
    <>
    <main>
    <Tours removeTour={removeTour} tours={tours} />
    </main>
    </>
  );
}

export default App
