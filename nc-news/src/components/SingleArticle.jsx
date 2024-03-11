import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getArticleById } from "../api";
import {Link} from "react-router-dom"

const SingleArticle = () => {
    const {article_id} = useParams()
  const [article, setArticle] = useState([]);
  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, []);
  return (
    <>
    <div className="single-article">
        <Link to="/articles">
        <button >Go back </button> </Link>
        <h2>{article.title}</h2>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>        
        <img src={article.article_img_url}/>
        <p>Created: {Date(article.created_at)}</p>
        <p>Votes: {article.votes}</p>
        <p>Comment count: {article.comment_count}</p>
    </div>
    </>
  );
};

export default SingleArticle;
