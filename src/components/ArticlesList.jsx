import React from "react";
import ArticlesCard from "./ArticlesCard";
import Loading from "./Loading";

const ArticlesList = ({ articles, isLoading }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <div>
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
