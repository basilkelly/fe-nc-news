import React from "react";
import { useNavigate } from "react-router-dom";

const Topics = ({ setNewQuery }) => {
  const nav = useNavigate();

  const handleClick = (e) => {
    if (e.target.value != "all") {
      setNewQuery(() => {
        return e.target.value;
      });
      nav(`/articles?topic=${e.target.value}`);
    }
    if (e.target.value === "all") {
      setNewQuery(null);
      nav(`/articles`);
    }
  };

  return (
    <div>
      <button className="topic-button" value="all" onClick={handleClick}>
        All
      </button>
      <button className="topic-button" value="coding" onClick={handleClick}>
        Coding
      </button>
      <button className="topic-button" value="cooking" onClick={handleClick}>
        Cooking
      </button>
      <button className="topic-button" value="football" onClick={handleClick}>
        Football
      </button>
    </div>
  );
};

export default Topics;
