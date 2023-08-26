import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

const ProductCard = ({ item }) => {
  return (
    <Card>
      <img src={item?.img} />
      <div>{item?.choice === true ? 'Conscious choice' : null}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? 'New' : null}</div>
    </Card>
  );
};

export default ProductCard;
