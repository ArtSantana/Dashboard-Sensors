import React, { Component } from 'react';
import './App.css';
import Config from './pages/Config/Config';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './pages/Home/Home';
import './global.css'
import MenuHeader from './Components/MenuHeader/MenuHeader';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="Layout">
          <div className="header">
            <MenuHeader />
          </div>
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
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