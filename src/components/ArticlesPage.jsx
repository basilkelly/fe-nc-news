import React, { useEffect, useState } from "react";
import { getAllArticles, getArticlesByQuery } from "../api";
import Topics from "./Topics";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleSorter from "./ArticleSorter";
import ArticlesOrderBy from "./ArticlesOrderBy";
import ArticlesList from "./ArticlesList";

const ArticlesPage = () => {
  const [newQuery, setNewQuery] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const currentTopicParam = new URLSearchParams(location.search).get("topic");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    setIsloading(true);
    setNewQuery(currentTopicParam);
    if (
      newQuery === null &&
      (sortBy === "created_at" || sortBy === "") &&
      orderBy === ""
    ) {
      nav(`/articles`);
      getAllArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);

        setIsloading(false);
      });
    } else if (newQuery === null) {
      getArticlesByQuery(newQuery, sortBy, orderBy).then(
        (topicArticlesFromApi) => {
          setArticles(topicArticlesFromApi);
          setIsloading(false);
        }
      );
    } else if (
      newQuery === "coding" ||
      newQuery === "cooking" ||
      newQuery === "football"
    ) {
      getArticlesByQuery(newQuery, sortBy, orderBy).then(
        (topicArticlesFromApi) => {
          setArticles(topicArticlesFromApi);
          setIsloading(false);
        }
      );
    }
  }, [newQuery, sortBy, orderBy]);

  return (
    <div className="articles-page">
      <h2>Articles</h2>
      <Topics setNewQuery={setNewQuery} />
      <ArticleSorter
        setSortBy={setSortBy}
        sortBy={sortBy}
        newQuery={newQuery}
      ></ArticleSorter>
      <ArticlesOrderBy
        setOrderBy={setOrderBy}
        orderBy={orderBy}
      ></ArticlesOrderBy>
      <div className="articles-list">
      <ArticlesList articles={articles} isLoading={isLoading} /></div>
    </div>
  );
};

export default ArticlesPage;
