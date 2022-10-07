import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const categoryListHandler = items.map((item) => {
  return item.category;
});

let allUniqueCategories = ["all", ...new Set(categoryListHandler)];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // const [categories, setCategories] = useState(allUniqueCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={allUniqueCategories}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
