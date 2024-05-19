import React from "react";

const ArticleSorter = ({ setSortBy, sortBy, newQuery }) => {
  const handleSortingChange = (e) => {
    setSortBy(() => {
      return e.target.value;
    });
  };

  return newQuery ? (
    <div>
      <form>
        <label htmlFor="sort-by-form">Sort Articles:</label>
        <select
          id="sort-by-form"
          name="sort-by-form"
          onChange={handleSortingChange}
          value={sortBy}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="title">Title</option>
          <option value="votes">Votes</option>
        </select>
      </form>
    </div>
  ) : (
    <div>
      <form>
        <label htmlFor="sort-by-form">Sort Articles:</label>
        <select
          id="sort-by-form"
          name="sort-by-form"
          onChange={handleSortingChange}
          value={sortBy}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="title">Title</option>
          <option value="votes">Votes</option>
          <option value="topic">Topic</option>
        </select>
      </form>
    </div>
  );
};

export default ArticleSorter;
