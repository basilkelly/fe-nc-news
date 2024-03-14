import React from "react";
import { deleteCommentById } from "../api";

const DeleteComment = ({ comment_id, setComments }) => {
  const deleteSingleComment = () => {
    let feedbackMsg = document.getElementById("comment-delete-message");
    feedbackMsg.style.visibility = "visible";

    deleteCommentById(comment_id);
    setComments((currComments) => {
      for (let i = 0; i < currComments.length; i++) {
        const element = currComments[i];
        if (element.comment_id === comment_id) {
          currComments.splice(i, 1);
        }
      }
      return [...currComments];
    });
  };

  return (
    <div>
      <button onClick={deleteSingleComment}>Delete Comment</button>
    </div>
  );
};

export default DeleteComment;
