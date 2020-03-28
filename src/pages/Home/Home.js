import React, { Component } from 'react';
import ChartBars from '../../Components/ChartBars/ChartBars';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div id="returnHome">
        <ChartBars />
      </div>
    )
  }
}