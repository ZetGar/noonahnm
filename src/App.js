import React, { useEffect, useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Counter from './page/Counter';
import Weather from './page/Weather';

import Homepage from './page/route/Homepage';
import Aboutpage from './page/route/Aboutpage';
import Productpage from './page/route/Productpage';
import ProductDetail from './page/route/ProductDetail';
import Loginpage from './page/route/Loginpage';

import Navbar from './component/shoppingmall/Navbar';
import ProductAll from './page/shoppingmall/ProductAll';
import Login from './page/shoppingmall/Loginpage';
import ProductDtl from './page/shoppingmall/ProductDetail';
import PrivateRoute from './page/shoppingmall/PrivateRoute';

import Reduxpage from './page/Redux/Reduxpage'

import Phonebook from './page/phonebook/Phonebook';

const App = () => {
  const [authenticate, setAuthenticate] = useState(false);
  //true : login O / false : login X

  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])

  
  const ShoppingDetail = ()=>{
    return authenticate ===true? <ProductDtl /> : <Navigate to="/shopping/login" />;
  }

  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/weather" element={<Weather />} />

        {/* Route 수업 */}
        <Route path="/route" element={<Homepage />} />
        <Route path="/route/about" element={<Aboutpage />} />
        <Route path="/route/products" element={<Productpage />} />
        <Route path="/route/products/:id" element={<ProductDetail />} />
        <Route path="/route/login" element={<Loginpage />} />
        <Route path="/route/user" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>

      {/* shoppingmall */}
      {/* <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/> */}
      <Routes>
        <Route path="/shopping" element={<ProductAll />} />
        <Route path="/shopping/login" element={<Login setAuthenticate={setAuthenticate}  />} />
        <Route path="/shopping/products/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>

      {/* redux practice */}
      <Routes>
        <Route path="/redux" element={<Reduxpage />} />
      </Routes>

      {/* phonebook */}
      <Routes>
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </>
  );
};

export default App;
