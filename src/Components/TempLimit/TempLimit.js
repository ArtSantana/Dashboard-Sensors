import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './TempLimit.css';
import { InputNumber } from 'antd';

export default class TempLimit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
      limitOne: 23,
      limitTwo: 23,
      limitThree: 23,
      limitFour: 23,
    }
  }

  async componentDidMount() {
    const response = await fetch('/max_temp/search');
    const data = await response.json();
    
    this.setState({
      limitOne: data[0].temperature,
      limitTwo: data[1].temperature,
      limitThree: data[2].temperature,
      limitFour: data[3].temperature,
    })
  }

  patchMax = (e, id) => {
    const data = {
      temperature: e,
      ID: id,
    }
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('/max_temp/patch', options);
  }

  render() {
    return (
      <div id="main">
        <div id="inputs">
          <h3>Temperatura Limite</h3>
          <InputNumber className="eachInput" size="large" min={1} max={40} value={this.state.limitOne} 
            onChange={(e) => {this.setState({limitOne: e}); this.patchMax(e, 1)}}
          />
          <InputNumber className="eachInput" size="large" min={1} max={40} value={this.state.limitTwo}
            onChange={(e) => {this.setState({limitTwo: e}); this.patchMax(e, 2)}}
          />
          <InputNumber className="eachInput" size="large" min={1} max={40} value={this.state.limitThree}
            onChange={(e) => {this.setState({limitThree: e}); this.patchMax(e, 3)}}
          />
          <InputNumber className="eachInput" size="large" min={1} max={40} value={this.state.limitFour}
            onChange={(e) => {this.setState({limitFour: e}); this.patchMax(e, 4)}}
          />
        </div>
      </div>
    )
  }
}