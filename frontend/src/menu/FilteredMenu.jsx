import React, { useState, useEffect } from 'react';
import menuItems from '../data/menuData';
import './FilteredMenu.css';
import Nav from '../page/Nav';
import Footer from '../page/Footer';

export default function FilteredMenu({ addToCart }) {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const categories = menuItems && menuItems.length > 0
    ? ['All', ...new Set(menuItems.map(item => item.category))]
    : ['All'];

  const filtered = menuItems
    ? menuItems.filter(item =>
        (category === 'All' || item.category === category) &&
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="menu-page">
      <div className={`sticky-nav ${showNav ? 'visible' : 'hidden'}`}>
        <Nav />
      </div>

      <h2>🍽 All Menu</h2>

      {showMsg && (
        <div className="popup-overlay">
          <div className="popup-msg">✅ Added to cart!</div>
        </div>
      )}

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cat === category ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="menu-grid">
        {filtered.length > 0 ? (
          filtered.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className="price-cart-row">
                <p><strong>₹{item.price}</strong></p>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>
            No menu items found.
          </p>
        )}
      </div>
      <div className="foo1">
      <Footer/></div>
    </div>
  );
}
