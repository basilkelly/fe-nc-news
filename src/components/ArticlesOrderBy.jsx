import React from "react";

const ArticlesOrderBy = ({ setOrderBy, orderBy }) => {
  const handleOrderChange = (e) => {
    setOrderBy(() => {
      return e.target.value;
    });
  };
  return (
    <div className="sort-dropdowns">
      <form>
        <label htmlFor="order-by-form">Order: </label>
        <select
          id="order-by-form"
          name="order-by-form"
          onChange={handleOrderChange}
          value={orderBy}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </form>
    </div>
  );
};

export default ArticlesOrderBy;
