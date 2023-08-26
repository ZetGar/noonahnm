import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/route');
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={goToHomepage}> Go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
