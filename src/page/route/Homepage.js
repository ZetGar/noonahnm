import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();

  const goProductPage =()=>{
    navigate('/route/products?q=pants');
  }

  return (
    <div>
      <h1>Homepage</h1>
      <Link to='/route/about'>Go to about page </Link>
      <button onClick={goProductPage}>Go to Product page</button>
    </div>
  )
}

export default Homepage