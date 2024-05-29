import React, { useContext, useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/User";
import "../index.css";

const CommentAdder = ({ setComments }) => {
  const [user] = useContext(UserContext);
  const [body, setBody] = useState("");
  const { article_id } = useParams();
  const handleFormChange = (event) => {
    if (event.target.id === "body") {
      setBody(event.target.value);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: user.username,
      body: body,
    };
    setComments((currComments) => {
      return [newComment, ...currComments];
    });

    postComment(newComment, { article_id: article_id });
  };

  return user.username === undefined ? (
    <div>
      <p>Sign in to post a Comment</p>
    </div>
  ) : (
    <div>
      <p></p>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="body">Post a Comment as {user.username}:</label>
        <input
          id="body"
          type="text"
          required
          onChange={handleFormChange}
          value={body}
        ></input>
        <button>send</button>
      </form>
    </div>
  );
};

export default CommentAdder;
