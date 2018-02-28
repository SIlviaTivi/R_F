import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleAuth}>Login con google</button>
        </p>
      </div>
    );
  }
}

export default App;
