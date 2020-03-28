import React, { Component } from 'react';
import SwitchSensors from '../../Components/SensorSwitch/SwitchSensors';
import TempLimit from '../../Components/TempLimit/TempLimit';
import Email from '../../Components/Email/Email';
import './Config.css'

export default class Config extends Component {
  render() {
    return (
      <div id="Config">
        <SwitchSensors />
        <TempLimit />
        <Email />
      </div>
    );
  }
}