import axios from "axios";
const api = axios.create({
  baseURL: "https://nc-news-28fh.onrender.com/api",
});

const getAllArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
const patchArticleByID = (article_id) => {

  return api.patch(`/articles/${article_id}`, { votes: 1 }).then(({ data }) => {
   
    return data;
  });
};
export {
  getAllArticles,
  getArticleById,
  getCommentsByArticleId,
  patchArticleByID,
};
