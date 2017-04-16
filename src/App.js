import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Popular.css';
import Popular from './components/popular.js'; 

let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Switch = ReactRouter.Switch;

import Nav from './components/nav.js'; 


class App extends Component {
  render() {
    return (
        <Router>
        <div className='App'>
            <Nav />
            <Switch>
               <Route path='/popular' component={Popular} />
               <div>TEST </div>
            </Switch>
        </div> 
        </Router>
    )
  }
}

export default App;
