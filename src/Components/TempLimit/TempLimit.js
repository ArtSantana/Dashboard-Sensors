import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './TempLimit.css';
import { InputNumber } from 'antd';

export default class TempLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limitOne: 23,
      limitTwo: 23,
      limitThree: 23,
      limitFour: 23,
    }
  }

  async componentDidMount() {

  }
  
  render() {
    return (
      <div id="main">
        <div id="inputs">
          <h3>Temperatura Limite</h3>
          <InputNumber className="eachInput" size="large" min={1} max={40} defaultValue={this.state.limitOne}/>
          <InputNumber className="eachInput" size="large" min={1} max={40} defaultValue={this.state.limitTwo}/>
          <InputNumber className="eachInput" size="large" min={1} max={40} defaultValue={this.state.limitThree}/>
          <InputNumber className="eachInput" size="large" min={1} max={40} defaultValue={this.state.limitFour}/>
        </div>
      </div>
    )
  }
}