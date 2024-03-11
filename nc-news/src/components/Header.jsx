import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>
      <h1>NC NEWS</h1>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/articles">Articles </Link>
      </nav>
    </div>
  );
};

export default Header;
