import React, { useState } from 'react';
import './Feedback.css';
import Nav from '../page/Nav';
import Footer from './Footer';

export default function Feedback() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    rating: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send data to backend/API here
    console.log('Feedback submitted:', form);

    setSubmitted(true);
    setForm({ name: '', email: '', message: '', rating: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="main">
      <Nav/>
      <div className="feedback-container">
      
      <h2>📝 We value your feedback!</h2>

      {submitted && <p className="success-msg">✅ Thank you for your feedback!</p>}

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />

        <select name="rating" value={form.rating} onChange={handleChange} required>
          <option value="">Rate us</option>
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Good</option>
          <option value="3">⭐⭐⭐ Average</option>
          <option value="2">⭐⭐ Poor</option>
          <option value="1">⭐ Very Poor</option>
        </select>

        <textarea
          name="message"
          value={form.message}
          placeholder="Your feedback..."
          onChange={handleChange}
          rows="4"
          required
        />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
        <Footer/>
    </div>

  );
}
