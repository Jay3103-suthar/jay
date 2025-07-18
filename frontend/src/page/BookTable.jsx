import React, { useState } from 'react';
import './BookTable.css';
import bookingImg from '../img/7.avif'; 

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Booking:', formData);
  setSubmitted(true);


  setFormData({
    name: '',
    date: '',
    time: '',
    guests: 1,
    phone: '',
  });

  setTimeout(() => setSubmitted(false), 3000);
};


  return (
    <div className="booking-container">
      <div className="booking-img">
        <img src={bookingImg} alt="Booking" />
      </div>
      <div className="booking-form">
        <h2>Book a Table</h2>
        {submitted && <div className="booking-success">✅ Booking Confirmed!</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <small>Enter your full name</small>
          </div>
          <div className="form-group">
            <input type="date" name="date" required value={formData.date} onChange={handleChange} />
            <small>Select the date for your reservation</small>
          </div>
          <div className="form-group">
            <input type="time" name="time" required value={formData.time} onChange={handleChange} />
            <small>Choose a preferred time slot</small>
          </div>
          <div className="form-group">
            <input type="number" name="guests" min="1" placeholder="Guests" required value={formData.guests} onChange={handleChange} />
            <small>How many guests will be attending?</small>
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
            <small>Enter your mobile number for confirmation</small>
          </div>
          <button type="submit">Book Tabel</button>
        </form>
      </div>
    </div>
  );
}
