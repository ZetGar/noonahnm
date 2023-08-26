import React from 'react'
import { Navigate } from 'react-router-dom';
import ProductDetail from './ProductDetail';


const PrivateRoute = ({authenticate}) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/shopping/login" />;
}

export default PrivateRoute