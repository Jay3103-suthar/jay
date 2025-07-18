import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('completedOrders');
    try {
      const parsed = JSON.parse(stored) || [];
      setCompletedOrders(Array.isArray(parsed) ? parsed : []);
    } catch {
      setCompletedOrders([]);
    }
  }, []);

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Overview of orders and performance.</p>

        <div className="stats-cards">
          <div className="stat-card completed">
            <h3>Total Completed Orders</h3>
            <p>{completedOrders.length}</p>
          </div>
        </div>

        <h2>Completed Orders List</h2>
        {completedOrders.length > 0 ? (
          <div className="table-responsive">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total ₹</th>
                </tr>
              </thead>
              <tbody>
                {completedOrders.map((order, idx) => (
                  <tr key={idx}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.items?.join(', ')}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No completed orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
