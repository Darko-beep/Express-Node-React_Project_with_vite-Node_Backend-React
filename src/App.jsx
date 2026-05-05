import { useState, useEffect } from 'react';
import api from './api/axios';

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', price: 0 });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await api.get('/items');
    setItems(res.data);
  };

  const createItem = async (e) => {
    e.preventDefault();
    const res = await api.post('/items', form);
    setItems([res.data, ...items]);
    setForm({ name: '', price: 0 });
  };

  const deleteItem = async (id) => {
    await api.delete(`/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div>
      <h1>Item Manager</h1>
      <form onSubmit={createItem}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: +e.target.value })}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - ${item.price}
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;