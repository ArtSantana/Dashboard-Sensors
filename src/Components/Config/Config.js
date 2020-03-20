import React, { Component } from 'react';
import SwitchSensors from '../SensorSwitch/SwitchSensors';
import TempLimit from '../TempLimit/TempLimit';
import './Config.css'

export default class Config extends Component {
  render() {
    return (
      <div id="Config">
        <SwitchSensors />
        <TempLimit />
      </div>
    );
  }
}