import React from 'react';
import { useParams,useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
  // 👉 Parameter 값 가져오기

  // const parmas = useParams(); //아래 내용과 동일한 형식
  const {id} = useParams();

  // console.log(parmas); //:id 값 object형식
  // /route/products/:id/:num => id:x / num:y
  console.log(id); //:id 값
  
  return (
    <div>
      <h1>ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
