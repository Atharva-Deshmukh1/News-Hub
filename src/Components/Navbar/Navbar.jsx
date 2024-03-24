import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import './Navbar.css';

const Navbar = () => {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className="navbar-container">
      <div className="nav-links">
        <nav>
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/About' className="nav-link">About</Link>
          <Link to='/LogIn' className="nav-link">LogIn</Link>
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
