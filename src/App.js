import React, { Component } from 'react';
import dotenv from 'dotenv';
import './App.css';
import CharacterPage from './components/CharacterPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Character Name</h2>

        </div>
        <CharacterPage />
      </div>
    );
  }
}

export default App;

<ul className="icons">
  <li><i className="fa fa-plus fa-lg" aria-hidden="true"></i></li>
  <li><i className="fa fa-pencil fa-lg" aria-hidden="true"></i></li>
</ul>
