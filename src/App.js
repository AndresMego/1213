import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Test} from './components/Test';
import { Navbar } from './components/Navbar';


let tests = [];

for(let i=0;i<10;i++){
  tests.push(<Test  number={i}   />);
};

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Andres <code>src/App.js</code> and save to reload.
        </p>
        {tests}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
