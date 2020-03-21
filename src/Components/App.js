import React, { Component } from 'react';
import './App.css';
import Config from './Config/Config';
import ChupaCana from './ChupaCana';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="Layout">
          <div className="header">            
            <Link to="/"><HomeIcon fontSize="large" color="action" className="btnHeader"/></Link>
            <Link to="/config"><SettingsIcon fontSize="large" color="action" className="btnHeader" /></Link>
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={ChupaCana} />
              <Route path="/config" exact component={Config} />
            </Switch>
          </div>
          <div className="footer">
            <h3 id="copyright">© Desenvolvido por Art Santana</h3>
          </div>
        </div>
      </Router>
    )
  }
}