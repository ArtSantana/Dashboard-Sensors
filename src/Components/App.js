import React, { Component } from 'react';
import './App.css';
import SwitchSensors from './SwitchSensors';
import ChupaCana from './ChupaCana';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import Button from '@material-ui/core/Button';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="Layout">
          <div className="header">
            <Link to="/"><Button className="btnHeader">Home</Button></Link>
            <Link to="/switch"><Button className="btnHeader">Switch</Button></Link>
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={ChupaCana} />
              <Route path="/switch" exact component={SwitchSensors} />
            </Switch>
          </div>
          <div className="footer">
          </div>
        </div>
      </Router>
    )
  }
}