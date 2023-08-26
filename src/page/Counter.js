//functionComponent : rafce + tab

import React, { useState, useEffect } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);

  const increase = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("useEffect1 fire -> componentDidMount 대체함 : API 호출");
  }, []);

  useEffect(()=>{
    console.log('useEffect2 fire -> componentDidUpdate 대체함 : update된 값 보여줌', num)
    //array 값이 여러개일때도 값이 변하면 실행됨
  },[num])

  return (
    <div>
      {console.log("render")}

      <h1>Counter</h1>
      <p>{num}</p>
      <button onClick={increase}>클릭</button>
    </div>
  );
};

export default Counter;
