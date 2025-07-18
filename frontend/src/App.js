import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Thehome.jsx';
import Offers from './offer/AllOffers.jsx';
import FilteredMenu from './menu/FilteredMenu.jsx';
import BestSellers from './menu/BestSellers.jsx';
import Cart from './menu/Cart.jsx';
import Feedback from './page/Feedback.jsx';
import About from './page/About.jsx';
import Order from './page/Order.jsx'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeDiscount, setActiveDiscount] = useState(0);

  const addToCart = (item) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
  };

  const onIncrease = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const onDecrease = (id) => {
    const updated = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updated);
  };

  const clearCart = () => {
    setCartItems([]);
    setActiveDiscount(0);
  };

  const applyOffer = (discount) => {
    setActiveDiscount(discount);
  };

  const calculateTotal = (items) => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountAmount = (subtotal * activeDiscount) / 100;
    return subtotal - discountAmount;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/offer" element={<Offers applyOffer={applyOffer} />} />
        <Route path="/menu" element={<FilteredMenu addToCart={addToCart} />} />
        <Route path="/most-selling" element={<BestSellers addToCart={addToCart} />} />
        <Route path="/contact" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/order"
          element={
            <Order
              cartItems={cartItems}
              totalAmount={calculateTotal(cartItems)}
              onOrderPlaced={clearCart}
            />
          }
        />
        <Route
          path="/services"
          element={
            <Cart
              cartItems={cartItems}
              onRemove={removeFromCart}
              onClear={clearCart}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              activeDiscount={activeDiscount}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
