import React, { useState } from 'react';
import './MenuManager.css';

const MenuManager = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    category: '',
    image: null
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewItem({ ...newItem, image: imageUrl });
    }
  };

  const handleAdd = () => {
    if (newItem.name && newItem.price && newItem.category) {
      setMenuItems([...menuItems, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', price: '', category: '', image: null });
    }
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    const item = menuItems.find(i => i.id === id);
    setNewItem(item);
    handleDelete(id);
  };

  return (
    <div className="admin-container">
      <div className="admin-main">
        <div className="admin-content">
          <h1>Menu Manager</h1>
          <p>Manage your menu items here.</p>

          <div className="menu-form">
            <input
              type="text"
              name="name"
              placeholder="Item name"
              value={newItem.name}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItem.price}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={newItem.category}
              onChange={handleChange}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {newItem.image && (
              <img src={newItem.image} alt="Preview" className="preview-img" />
            )}
            <button onClick={handleAdd}>Add / Update</button>
          </div>

          <div className="menu-list">
            <h2>Current Menu Items</h2>
            {menuItems.length === 0 ? (
              <p>No items yet.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map(item => (
                    <tr key={item.id}>
                      <td>
                        {item.image && <img src={item.image} alt="Item" className="menu-img" />}
                      </td>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>{item.category}</td>
                      <td>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        <button className="delete" onClick={() => handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuManager;
