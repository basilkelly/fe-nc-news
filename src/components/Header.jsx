import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/User";

const Header = () => {
  const [user] = useContext(UserContext);
  return (
    <div className="header">
      <h1 className="header-title">
        {" "}
        <img src="header-globe-icon.png" width="35" height="35"></img> NC NEWS
      </h1>
      <p className="header-log-in">
        Logged in as {user && user.username ? user.username : "guest"}
      </p>
      <nav className="header-nav-bar">
        <Link className="header-nav" to="/">
          Home
        </Link>
        <Link className="header-nav" to="/articles">
          Articles
        </Link>
        <Link className="header-nav" to="/login">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Header;
