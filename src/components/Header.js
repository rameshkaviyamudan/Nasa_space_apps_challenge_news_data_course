import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">Quiz.</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/climate-data">Climate-Data</Link></li>
          <li><Link to="/mini-courses">Mini-Courses</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;