import React from "react";

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
