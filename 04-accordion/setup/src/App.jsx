import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question'
function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <>
      <main>
        <section className='container'>
          <h2>Questions</h2>
        {questions.map(question=> <SingleQuestion key={question.id} {...question} />)}
        </section>
      </main>
    </>
  );
}

export default App;
