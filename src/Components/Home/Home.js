import React, { Component } from 'react';
import ChartBars from '../ChartBars/ChartBars';
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