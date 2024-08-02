import React from "react";
import { Link } from "react-router-dom";

const ArticlesCard = ({
  title,
  article_id,
  image,
  author,
  votes,
  topic,
  created,
  comment_count,
}) => {
  function dateFormat(created) {
    return new Date(created).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div key={article_id}>
      <li className="article-card">
        <Link to={`/articles/${article_id}`}>
          <h2>{title}</h2>
        </Link>
        <p>Author: {author}</p>
        <p>Topic: {topic}</p>
        <p>Created: {dateFormat(created)}</p>
        <img src={image} alt="image relevant to the article" width={300} />
        <p>
          {votes} 👍 Comments: {comment_count}
        </p>
      </li>
    </div>
  );
};

export default ArticlesCard;
