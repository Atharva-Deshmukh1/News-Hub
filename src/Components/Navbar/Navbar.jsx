import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const Navbar = () => {
  
  const {theme,toggleTheme} = useTheme()

  return (
    <div>
    <div>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/LogIn'>LogIn</Link>
    </nav>
    </div>
    <div className="mode-switch">
      <label>
      <input type="checkbox"
      onClick={toggleTheme}
      checked={theme === "dark"} />
      </label>
    </div>
    
    </div>
  );
};

export default Navbar;