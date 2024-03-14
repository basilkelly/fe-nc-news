import React, { useContext, useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/User";
import "../index.css";

const CommentAdder = ({ setComments }) => {
  const { loggedInUser } = useContext(UserContext);
  const [body, setBody] = useState("");
  const { article_id } = useParams();

  const handleChange = (event) => {
    if (event.target.id === "body") {
      setBody(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: loggedInUser.username,
      body: body,
    };
    setComments((currComments) => {
      return [newComment, ...currComments];
    });

    postComment(newComment, { article_id: article_id });
  };

  return (
    <div>
      <h3>post a comment</h3>
      <p></p>
      <form onSubmit={handleSubmit}>
        <input
          id="body"
          type="text"
          required
          onChange={handleChange}
          value={body}
        ></input>
        <button>post comment</button>
      </form>
    </div>
  );
};

export default CommentAdder;
