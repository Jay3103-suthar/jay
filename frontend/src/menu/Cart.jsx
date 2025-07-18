
import React from 'react';
import './Cart.css';
import Nav from '../page/Nav';
import Footer from '../page/Footer';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cartItems, onRemove, onClear, onIncrease, onDecrease, activeDiscount }) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = activeDiscount > 0 ? (subtotal * activeDiscount) / 100 : 0;
  const total = subtotal - discountAmount;

  return (
    <div className="cart-page">
      <Nav />
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>❌</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h4>Subtotal: ₹{subtotal.toFixed(2)}</h4>
            {activeDiscount > 0 && (
              <p className="discount">🎁 Offer Applied: {activeDiscount}% OFF (₹{discountAmount.toFixed(2)})</p>
            )}
            <h4>Total: ₹{total.toFixed(2)}</h4>
            <button onClick={onClear}>Clear Cart</button>
            <button className="checkout" onClick={() => navigate('/order')}>Proceed to Checkout</button>
          </div>
        </>
      )}
      <div className="foo">
        <Footer/>
      </div>
    </div>
  );
}
