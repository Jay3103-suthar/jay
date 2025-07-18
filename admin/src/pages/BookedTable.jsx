import React, { useState } from 'react';
import './BookedTable.css';

const BookedTable = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      contact: "9876543210",
      date: "2025-07-18",
      time: "7:00 PM",
      people: 4,
      status: "pending"
    },
    {
      id: 2,
      name: "Priya Mehta",
      contact: "7894561230",
      date: "2025-07-18",
      time: "8:30 PM",
      people: 2,
      status: "pending"
    }
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    );
    setBookings(updated);
  };

  return (
    <div className="booked-table-container">
      <h2>Table Bookings</h2>
      <p>Manage table reservations below:</p>

      <div className="booked-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Date</th>
              <th>Time</th>
              <th>People</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td>{booking.name}</td>
                <td>{booking.contact}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.people}</td>
                <td>
                  <span className={`status ${booking.status}`}>
                    {booking.status}
                  </span>
                </td>
                <td>
                  {booking.status === 'pending' ? (
                    <>
                      <button onClick={() => updateStatus(booking.id, 'accepted')} className="accept-btn">Accept</button>
                      <button onClick={() => updateStatus(booking.id, 'rejected')} className="reject-btn">Reject</button>
                    </>
                  ) : (
                    <em>{booking.status}</em>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedTable;
