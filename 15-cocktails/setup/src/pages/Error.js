import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='section error-page'>
      <div className='error-container'>
      <h1>Error</h1>
      <p>404 not found</p>
      <Link to='/' className='btn'>Back to home.</Link>
      </div>
    </div>
  )
}

export default Error
