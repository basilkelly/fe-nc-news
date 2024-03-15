import React, { useEffect, useState } from "react";
import ArticlesCard from "./ArticlesCard";
import { getAllArticles, getArticlesByQuery } from "../api";
import Loading from "./Loading";
import Topics from "./Topics";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ArticlesList = () => {
  const [newQuery, setNewQuery] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const currentParam = queryparams.get("topic");
  const nav = useNavigate();
  
  useEffect(() => {
    setIsloading(true)
    setNewQuery(currentParam);
    if (newQuery === null || newQuery === "") {
      nav(`/articles`);
      getAllArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsloading(false);
      });
    } else {
      getArticlesByQuery(newQuery).then((topicArticlesFromApi) => {
        setArticles(topicArticlesFromApi);
        setIsloading(false);
      });
    }
  }, [newQuery]);

  return isLoading ? (
    <Loading />
  ) : (
      <div>
      <h2>Todays Articles</h2>
      <Topics setNewQuery={setNewQuery} newQuery={newQuery} />
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
