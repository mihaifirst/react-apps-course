import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Far Away</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  const handleAddItems(item) {
    setItems((items)=> [...items, item])
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };

    if (!description) {
      return;
    }
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  };

  const handleChangeInputDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <form className="add-form" onSubmit={handleSumbit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={handleChangeQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={handleChangeInputDescription}
      />
      <button>Add</button>
    </form>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
