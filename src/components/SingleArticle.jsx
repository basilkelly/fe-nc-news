import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getArticleById,
  getCommentsByArticleId,
  patchArticleByID,
} from "../api";
import { Link } from "react-router-dom";
import SingleArticleCommentsCard from "./SingleArticleCommentsCard";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

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

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentFromApi) => {
      setComments(commentFromApi);
    });
  }, []);

  return (
    <>
      <div className="single-article">
        <Link to="/articles">
          <button>Go back </button>{" "}
        </Link>
        <h2>{article.title}</h2>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Created: {article.created_at}</p>
        <img
          src={article.article_img_url}
          alt="image relevant to the article"
        />
        <p>{article.body}</p>
        <div className="article-footer">
          <p>Comment count: {article.comment_count}</p>
        </div>
        <div>
          <button
            className="upvote-button"
            onClick={() => upvote(article.article_id)}
          >
            {article.votes} 👍
          </button>
        </div>
      </div>

      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => {
            return (
              <SingleArticleCommentsCard
                key={comment.comment_id}
                body={comment.body}
                author={comment.author}
                votes={comment.votes}
                created={comment.created_at}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SingleArticle;
