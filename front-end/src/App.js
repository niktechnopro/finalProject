import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar'
import Example from './containers/Search'

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Search from './containers/Search'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <NavBar />
          <div className="app-body">

        <div className="container">
          <Route exact patch="/search" component={Example} />

      </div>
      </div>
      </div>

      </Router>
    );
  }
}

export default App;
