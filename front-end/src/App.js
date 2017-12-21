import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import LoginPage from './containers/LoginPage';

class App extends Component {
	constructor(){
		super()
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();

	}

  render() {
    return (
      <div className="App">
        <NavBar />
        <LoginPage />
      </div>
    );
  }
}

export default App;
