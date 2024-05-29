import React from "react";
import DeleteComment from "./DeleteComment";
import UserContext from "../contexts/User";
import { useContext } from "react";

const SingleArticleCommentsCard = ({
  body,
  author,
  votes,
  created,
  id,
  setComments,
  deleteFeedbackMsg,
  setDeleteFeedbackMsg
}) => {
  const  [user]  = useContext(UserContext);
  let isPostedByUser = false;

  if (user.username === author) {
    isPostedByUser = true;
  }

  return isPostedByUser ? (
    <>
      <div>
        <li className="comment">
          <h3>{author} </h3>
          <p>Time posted: {created}</p>
          <p className="comment-body">{body}</p>
          <p>Votes: {votes}</p>
          <DeleteComment
            comment_id={id}
            setComments={setComments}
            deleteFeedbackMsg={deleteFeedbackMsg}
            setDeleteFeedbackMsg={setDeleteFeedbackMsg}
          />
        </li>
      </div>
    </>
  ) : (
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
