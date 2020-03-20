import React, { Component } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import './SwitchSensors.css';

export default class Config extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      switchOne: false,
      switchTwo: false,
      switchThree: false,
      switchFour: false
    }
  }

  async componentDidMount() {
    const response = await fetch('/sensors');
    const data = await response.json();
    Promise.resolve(data).then(() => {
      this.setState({
        switchOne: !data[0].activate,
        switchTwo: !data[1].activate,
        switchThree: !data[2].activate,
        switchFour: !data[3].activate,
      })
    })
  }

  handleSwitch = (toggle, id) => {
    const data = {
      toggle: toggle,
      'id': id
    };
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('/sensors/activate', options);
  }

  render() {
    return (
      <div id="return">
        <FormControl component="fieldset" >
          <h3>Sensores Ativos</h3>
          <FormGroup>
            <FormControlLabel control={
              <Switch checked={this.state.switchOne} color="primary" 
              onChange={() => {this.setState({switchOne: !this.state.switchOne});
              this.handleSwitch(this.state.switchOne, 1)}}>
              </Switch> }
              label="Sensor 1"              
              />
            <FormControlLabel control={
              <Switch checked={this.state.switchTwo} color="primary" 
              onChange={() => {this.setState({switchTwo: !this.state.switchTwo});  
              this.handleSwitch(this.state.switchTwo, 2)}}>
              </Switch> }
              label="Sensor 2"
              />
            <FormControlLabel control={
              <Switch checked={this.state.switchThree} color="primary" 
              onChange={() => {this.setState({switchThree: !this.state.switchThree});
              this.handleSwitch(this.state.switchThree, 3)}}>
              </Switch> }
              label="Sensor 3"
              />
            <FormControlLabel control={
              <Switch checked={this.state.switchFour} color="primary" 
              onChange={() => {this.setState({switchFour: !this.state.switchFour});
              this.handleSwitch(this.state.switchFour, 4)}}>
              </Switch> }
              label="Sensor 4"
              />
          </FormGroup>
        </FormControl>
      </div> 
    )
  }
}