import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This React app was made with the sole porpouse of being deployed automatically by travis-ci
        </p>
        <a
          className="App-link"
          href="https://travis-ci.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Travis CI
        </a>
      </header>
    </div>
  );
}

export default App;
