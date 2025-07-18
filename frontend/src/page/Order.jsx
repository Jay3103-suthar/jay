import React, { useState } from 'react';
import './Order.css';
import Nav from '../page/Nav';
import Footer from '../page/Footer';
import qr from '../img/qr.png'; 

export default function Order({ cartItems, totalAmount, onOrderPlaced }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });
  const [upiId, setUpiId] = useState('');
  const [customer, setCustomer] = useState({
    tableNo: '',
    name: ''
  });

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!customer.tableNo || !customer.name) {
      alert('Please enter your table number and name.');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'Card') {
      const { name, number, expiry, cvv } = cardDetails;
      if (!name || !number || !expiry || !cvv) {
        alert('Please fill in all card details.');
        return;
      }
    }

    if (paymentMethod === 'UPI') {
      if (!upiId) {
        alert('Please enter your UPI ID.');
        return;
      }
      alert(`Payment request sent to ${upiId}`);
    }

    setOrderConfirmed(true);
    onOrderPlaced(); 
  };

  return (
    <div className="order-page">
      <Nav />
      <div className="main">
      <h2>🧾 Order Summary</h2>

      {orderConfirmed ? (
        <div className="confirmation">
          <h3>✅ Order Confirmed!</h3>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <>
          {/* Customer Info Fields */}
          <div className="customer-info">
            <input
              type="text"
              name="tableNo"
              placeholder="Table Number"
              value={customer.tableNo}
              onChange={handleCustomerChange}
              className="customer-input"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={customer.name}
              onChange={handleCustomerChange}
              className="customer-input"
            />
          </div>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={item.id} className="order-item">
                <p>{item.name} x {item.quantity}</p>
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <h4>Total: ₹{totalAmount.toFixed(2)}</h4>

          <div className="payment-section">
            <h4>Select Payment Method</h4>
            <label>
              <input
                type="radio"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={handlePaymentChange}
              /> Cash on Delivery
            </label>
            <label>
              <input
                type="radio"
                value="Card"
                checked={paymentMethod === 'Card'}
                onChange={handlePaymentChange}
              /> Debit / Credit Card
            </label>
            <label>
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === 'UPI'}
                onChange={handlePaymentChange}
              /> UPI
            </label>

            
            {paymentMethod === 'Card' && (
              <div className="card-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name on Card"
                  value={cardDetails.name}
                  onChange={handleCardChange}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Card Number"
                  value={cardDetails.number}
                  onChange={handleCardChange}
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiry Date (MM/YY)"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                />
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                />
              </div>
            )}

            {/* UPI Form */}
            {paymentMethod === 'UPI' && (
              <div className="upi-form">
                <img src={qr} alt="UPI QR" className="qr-code" />
                <input
                  type="text"
                  placeholder="Enter your UPI ID (e.g. name@upi)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
            )}

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}</div>
      <Footer />
    </div>
  );
}
