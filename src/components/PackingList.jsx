import { useState } from "react";
import Item from "./Item";

const PackingList = function ({
  data,
  onDeleteItem,
  onToggleItem,
  onDeleteAllItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = data;
  if (sortBy === "description")
    sortedItems = data
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = data
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item
            data={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button type="button" onClick={onDeleteAllItems}>
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
