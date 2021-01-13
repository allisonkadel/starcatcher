import React from 'react';
import logo from '../../assets/images/brett-ritchie-1vKTnwLMdqs-unsplash.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://unsplash.com/@brett_ritchie_photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h2>StarCatcher</h2>
        <p>
          A <a 
            className="App-link"
            href="https://github.com/cosmos/cosmos-sdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cosmos SDK
          </a> Github Issue Fetcher
        </p>
      </header>
    </div>
  );
}

export default App;
