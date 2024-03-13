import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { getAllArticles } from "../api";
import Loading from "./Loading";

const ArticlesList = () => {
  const [isLoading, setIsloading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsloading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <h2>Todays Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            
              <ArticlesCard
                key={article.article_id}
                article_id={article.article_id}
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
