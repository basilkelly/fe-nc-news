import React from "react";
import { getArticlesByQuery } from "../api";
import { Link, useNavigate, useParams } from "react-router-dom";

const Topics = ({ setNewQuery, newQuery }) => {
  const nav = useNavigate();

  const handleClick = (e) => {
    if (e.target.value != null) {
      setNewQuery(() => {
        return e.target.value;
      });
      nav(`/articles?topic=${e.target.value}`);
    } else {
      setNewQuery(null);
    }
  };

  return (
    <div>
      <button value={null} onClick={handleClick}>
        all
      </button>
      <button value="coding" onClick={handleClick}>
        coding
      </button>
      <button value="cooking" onClick={handleClick}>
        cooking
      </button>
      <button value="football" onClick={handleClick}>
        football
      </button>
    </div>
  );
};

export default Topics;
