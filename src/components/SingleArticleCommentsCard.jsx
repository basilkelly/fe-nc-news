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
  setDeleteFeedbackMsg,
}) => {
  const [user] = useContext(UserContext);
  let isPostedByUser = false;

  if (user.username === author) {
    isPostedByUser = true;
  }

  function dateFormat(created) {
    return new Date(created).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  return isPostedByUser ? (
    <>
      <div>
        <li className="comment">
          <h3 className="comment-author">{author} </h3>
          <p className="comment-time">Time posted: {dateFormat(created)}</p>
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
          <h3 className="comment-author">{author} </h3>
          <p className="comment-time">Time posted: {dateFormat(created)}</p>
          <p className="comment-body">{body}</p>
          {console.log(votes)}
          {votes >= 0 ? (
            <p className="positive-likes"> {votes} 👍</p>
          ) : (
            <p className="negative-likes"> {votes} 👎</p>
          )}
        </li>
      </div>
    </>
  );
};

export default SingleArticleCommentsCard;
