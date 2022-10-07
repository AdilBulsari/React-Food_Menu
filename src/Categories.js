import React from "react";

const Categories = ({ categories, filterItems }) => {
  const buttons = categories.map((category, index) => {
    return (
      <button
        key={index}
        className="filter-btn"
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    );
  });
  return <div className="btn-container">{buttons}</div>;
};

export default Categories;
