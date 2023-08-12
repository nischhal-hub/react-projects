import React, { useState, useEffect } from "react";

import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch("https://course-api.com/react-tabs-project");
    const data = await res.json();
    console.log(data);
    setJobs(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  const { title, dates, duties, company } = jobs[value]
  if(isLoading){
    return(
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <>
      <main>
        <section className="section">
          <div className="job-center">
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setValue(index);
                    }}
                    className={`job-btn  ${value === index && "active-btn"}`}
                  >
                    {item.company}
                  </button>
                );
              })}
            </div>
           
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
             
                {duties.map((duty) => (
                   <div className="job-desc">
                  <p>
                    <span className="job-icon">
                      <FaAngleDoubleRight />
                    </span>
                    {duty}
                  </p>
                  </div>
                ))}
              
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
