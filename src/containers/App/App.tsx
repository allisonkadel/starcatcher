import * as React from 'react';

// stylesheets
import './App.css';

//components
import Header from '../../components/Header/Header';
import IssuesContainer from '../../containers/IssuesContainer/IssuesContainer'

function App() {
  return (
    <div className="App">
      <Header/>
      <IssuesContainer/>
    </div>
  );
}

export default App;
