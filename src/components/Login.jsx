import React, { useContext, useState, useEffect } from "react";
import { getAllUsers } from "../api";
import UserContext from "../contexts/User";
import "../index.css";

const Login = () => {
  const [body, setBody] = useState("");
  const [users, setUsers] = useState("");
  const [UsersList, setUsersList] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [hasUsersList, setHasUsersList] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const handleFormChange = (event) => {
    if (event.target.id === "body") {
      setBody(event.target.value);
    }
  };
  const handleUsersChange = () => {
    if (users != "") {
      const usernamesArray = users.users.map((article) => {
        return article.username;
      });
      setUsersList(usernamesArray.toString());
      setIsloading(false);
    } else {
      setHasUsersList(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValidUser = false;
    const validUsernamesArray = users.users.map((article) => {
      return article.username;
    });
    validUsernamesArray.forEach((element) => {
      if (element === body) {
        setUser({ username: body });
        setErrorMessage([]);
        isValidUser = true;
      }
    });
    if (isValidUser === false) {
      setErrorMessage([
        "Error, that username does not exist. Please enter a current users username",
      ]);
    }
  };

  useEffect(() => {
    setIsloading(true);
    getAllUsers().then((articlesFromApi) => {
      setUsers(articlesFromApi);
      handleUsersChange(users);
      setIsloading(false);
    });
  }, [hasUsersList]);

  return (
    <div>
      <div>
        <p>{errorMessage.toString()}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="body">Enter your username:</label>
        <input
          id="body"
          type="text"
          required
          onChange={handleFormChange}
          value={body}
        ></input>
        <button>log in</button>
      </form>
      {UsersList ? (
        <p>current ncNews users: {UsersList}</p>
      ) : (
        <>
          <p>current ncNews users: Loading... </p>{" "}
        </>
      )}
    </div>
  );
};

export default Login;
