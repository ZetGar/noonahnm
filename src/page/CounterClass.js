//classComponent : acc + tab

import React, { Component } from "react";
import BoxClass from "../component/BoxClass";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      value: 1,
    };

    console.log("constructor : state 만들기");
  }

  increase = () => {
    this.setState({ num: this.state.num + 1, value: this.state.value + 1 });

    console.log("increase fnction", this.state);
  };

  componentDidMount() {
    console.log("componentDidMount : API 호출");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }

  render() {
    console.log("render : UI 그리기");

    return (
      <div>
        <p>state: {this.state.num}</p>
        <button onClick={this.increase}>클릭</button>
        {this.state.num < 3 && <BoxClass num={this.state.value} />}
      </div>
    );
  }
}
