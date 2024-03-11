import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { getAllArticles } from "../api";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);
  return (
    <div>
      <h2>Todays Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <ArticlesCard
              key={article.article_id}
              title={article.title}
              topic={article.topic}
              author={article.author}
              votes={article.votes}
              image={article.article_img_url}
              created={article.created_at}
              comment_count={article.comment_count}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ArticlesList;
