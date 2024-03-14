import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/User";

const Header = () => {
  const { loggedInUser } = useContext(UserContext)
  
  return (
    <div className='header'>
      <h1>NC NEWS</h1>
      <p>logged in as {loggedInUser.username }</p>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/articles">Articles </Link>
      </nav>
    </div>
  );
};

export default Header;
