import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul className="logo">
        <li>
          <h1 className="header-title">Space Travelers&apos; Hub</h1>
        </li>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions">Missions</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
