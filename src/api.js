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
const postComment = (comment, article_id) => {
  return api
    .post(`articles/${article_id.article_id}/comments`, comment)
    .then((data) => {
      return data;
    });
};

const deleteCommentById = (comment) => {
  return api.delete(`comments/${comment}`);
};

const getArticlesByQuery = (topic, sort_by, order) => {
  if (order.length === 0) {
    if (!topic && sort_by.length != 0) {
      return api.get(`articles?sort_by=${sort_by}`).then(({ data }) => {
        return data;
      });
    }
    if (!sort_by) {
      return api.get(`articles?topic=${topic}`).then(({ data }) => {
        return data;
      });
    }
    if (topic && sort_by) {
      return api
        .get(`articles?topic=${topic}&sort_by=${sort_by}`)
        .then(({ data }) => {
          return data;
        });
    }
  } else if (!topic && sort_by.length === 0) {
    return api.get(`articles?order=${order}`).then(({ data }) => {
      return data;
    });
  } else if (!sort_by) {
    return api
      .get(`articles?topic=${topic}&order=${order}`)
      .then(({ data }) => {
        return data;
      });
  } else if (!topic && sort_by) {
    return api
      .get(`articles?sort_by=${sort_by}&order=${order}`)
      .then(({ data }) => {
        return data;
      });
  } else if (topic && sort_by) {
    return api
      .get(`articles?topic=${topic}&sort_by=${sort_by}&order=${order}`)
      .then(({ data }) => {
        return data;
      });
  }
};

export {
  getAllArticles,
  getArticleById,
  getCommentsByArticleId,
  patchArticleByID,
  postComment,
  deleteCommentById,
  getArticlesByQuery,
};
