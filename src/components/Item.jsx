import React from "react";

const Item = ({ data, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={data.packed}
        onChange={() => onToggleItem(data.id)}
      />

      <p style={data.packed ? { textDecoration: "line-through" } : {}}>
        {data.quantity} {data.description}
      </p>

      <button onClick={() => onDeleteItem(data.id)}>❌</button>
    </li>
  );
};

export default Item;
