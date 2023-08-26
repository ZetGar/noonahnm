import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Productpage = () => {
    // 👉 Query 값 가져오기 : ?뒤에 들어오는 애들

  let [query,setQuery] = useSearchParams();

  console.log('query : ',query.get('q'))
  return (
    <div>
      <h1>Productpage</h1>
    </div>
  );
};

export default Productpage;
