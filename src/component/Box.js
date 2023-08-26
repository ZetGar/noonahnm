import React from 'react'

const Box = (props) => {
  console.log('boxProps',props)

  let result;

  if(props.tit == 'Computer' && props.result !== 'tie' && props.result !== undefined){
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    result = props.result;
  }



  return (
    <div className={`box ${result}`}>
      <h1>{props.tit}</h1>
      <p>{props.item && props.item.img}</p>
      <h2>{result}</h2>
    </div>
  )
}

export default Box