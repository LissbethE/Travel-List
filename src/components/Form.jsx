import { useState } from "react";

const Form = function (props) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  ///////////////////////////
  const arr20 = Array.from({ length: 20 }, (_, i) => i + 1);

  const optionEle = arr20.map((num) => {
    return (
      <option value={num} key={num}>
        {num}
      </option>
    );
  });

  ///////////////////////////
  const handleSubmit = function (e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    // Lifting state up
    props.onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  ///////////////////////////
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍trip?</h3>

      <div className="add-form__box">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {optionEle}
        </select>

        <input
          type="text"
          placeholder="Item..."
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
