import React, { Component } from 'react'

export default class BoxClass extends Component {
  
  componentWillUnmount(){
    console.log('byebye');
  }

  render() {
    return (
      <div>BoxClass{this.props.num}</div>
    ) 
  }
}
