import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../NewsContext/NewsContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar-container">
      <div className="nav-links">
        <nav>
          <Link to='/News-Hub' className="nav-link">Home</Link>
          <Link to='/News-Hub/about' className="nav-link">About</Link>
          <Link to='/News-Hub/login' className="nav-link">LogIn</Link>
          <Link to='/News-Hub/saved' className="nav-link">Saved</Link>

        </nav>
      </div>
      <div className="mode-switch">
        <label className="switch">
          <input 
            type="checkbox"
            onClick={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
