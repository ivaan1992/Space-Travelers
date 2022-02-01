import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import './App.css';

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
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
=======
const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/Missions" element={<Missions />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/" element={<Rockets />} />
    </Routes>
  </div>
);
>>>>>>> 609a059 (Create components and header)

export default App;
