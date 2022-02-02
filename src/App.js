import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import './App.css';

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

export default App;
