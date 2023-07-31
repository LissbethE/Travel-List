import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import { useState } from "react";

const App = function () {
  const [items, setItems] = useState([]);

  // Adding items
  const handleAddItems = function (item) {
    setItems((currentValue) => [...currentValue, item]);
  };

  // Checking items
  const handleToggleItem = function (id) {
    setItems((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    });
  };

  // Deleting item
  const handleDeleteItem = function (id) {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };

  // Deleting all items
  const handleDeleteAllItems = function (isTrue) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items? 🗑️"
    );

    if (confirmed) setItems([]);
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        data={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </>
  );
};

export default App;
