import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch} from 'react-router-dom'
import AboutTeam from './components/About'
import Home from './components/Home'
import Roster, {Player} from './components/Roster'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Router</h2>
        </div>
        <HashRouter>
          <div>
            <div>
              <Link to="/" style={{marginRight: '5px'}}>Home</Link>
              <Link to="/about" style={{marginRight: '5px'}}>About</Link>
              <Link to="/roster">Roster</Link>
            </div>
            <Route exact path='/' component={Home}/>
            <Route path="/about" component={AboutTeam}/>
            <Switch>
              <Route path="/roster/:player_id" component={Player}/>
              <Route path="/roster" component={Roster}/>
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
