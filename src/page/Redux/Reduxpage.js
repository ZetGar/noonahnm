import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from './../Redux/Box';

// Redux core : npm install redux
// react redux :

const Reduxpage = () => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const counter = (name) => {
    return dispatch({ type: name, payload: { num: 5 } });

    // dispatch({type, payload})
    //payload는 선택사항! option -> 함수의 매개변수같은 느낌
  };

  const login = () => {
    dispatch({ type: 'LOGIN', payload: { id: 'noona', password: '123' } });
  };
  return (
    <div>
      <h1>Redux를 사용하여 CounterApp 만들기</h1>

      <div>
        <button
          onClick={() => {
            counter('DECREMENT');
          }}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          onClick={() => {
            counter('INCREMENT');
          }}
        >
          +
        </button>

        <Box />

        <button onClick={login}>Login</button>
        <p>
          id:{id}, password: {password}
        </p>
      </div>
    </div>
  );
};

export default Reduxpage;
