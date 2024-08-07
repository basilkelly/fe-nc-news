import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
  patchArticleByID,
} from "../api";
import { Link } from "react-router-dom";
import SingleArticleCommentsCard from "./SingleArticleCommentsCard";
import Loading from "./Loading";
import CommentAdder from "./CommentAdder";

const SingleArticle = () => {
  const removeFeedbackMsg = () => {
    setDeleteFeedbackMsg(() => {
      return "comment-delete-message-off";
    });
  };

  const [deleteFeedbackMsg, setDeleteFeedbackMsg] = useState(
    "comment-delete-message-off"
  );
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);

  const upvote = (article_id) => {
    setArticle(() => {
      if (article.article_id === article_id) {
        const patch = { ...article, votes: article.votes + 1 };
        return patch;
      }
    });
    patchArticleByID(article_id).catch((err) => {
      console.log(err);
      setArticle(() => {
        if (article.article_id === article_id) {
          const patch = { ...article, votes: article.votes - 1 };
          return patch;
        }
      });
    });
  };

  function dateFormat(created) {
    return new Date(created).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentFromApi) => {
      setComments(commentFromApi);
      setIsloading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="single-article">
        <Link to="/articles">
          <button>Go back </button>{" "}
        </Link>
        <h2>{article.title}</h2>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Created: {dateFormat(article.created_at)}</p>
        <img
          src={article.article_img_url}
          alt="image relevant to the article"
        />
        <p>{article.body}</p>
        <div className="single-article-footer">
          <p className="single-article-footer-comment-count">
            Comment count: {article.comment_count}
          </p>
          <div>
            <button
              className="upvote-button"
              onClick={() => upvote(article.article_id)}
            >
              {article.votes} 👍
            </button>
          </div>
        </div>
      </div>
      <CommentAdder setComments={setComments} />
      <p id="success">Your comment has been posted!</p>
      <div>
        <h2>Comments</h2>

        <div>
          <p id={deleteFeedbackMsg}>
            {" "}
            comment deleted <button onClick={removeFeedbackMsg}>x</button>
          </p>
        </div>

        <ul>
          {comments.map((comment) => {
            return (
              <SingleArticleCommentsCard
                key={comment.comment_id}
                body={comment.body}
                author={comment.author}
                votes={comment.votes}
                created={comment.created_at}
                id={comment.comment_id}
                setComments={setComments}
                deleteFeedbackMsg={deleteFeedbackMsg}
                setDeleteFeedbackMsg={setDeleteFeedbackMsg}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SingleArticle;
