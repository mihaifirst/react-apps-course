function Item({ item, onDeleteItems, onToggleItems }) {
  const toggleItems = () => {
    onToggleItems(item.id);
  };

  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={toggleItems} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
