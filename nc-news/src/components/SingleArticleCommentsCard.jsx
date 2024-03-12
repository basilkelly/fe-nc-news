import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api";

const SingleArticleCommentsCard = ({ body, author, votes, created }) => {

  return (
    <>
      <div>
        <li className="comment">
          <h3>{author} </h3>
          <p>Time posted: {created}</p>
          <p className="comment-body">{body}</p>
          <p>Votes: {votes}</p>
        </li>
      </div>
    </>
  );
};

export default SingleArticleCommentsCard;
