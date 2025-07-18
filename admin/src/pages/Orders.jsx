import React, { useEffect, useState } from 'react';
import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    const activeOrders = JSON.parse(localStorage.getItem('activeOrders')) || [];
    const doneOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
    setOrders(activeOrders);
    setCompletedOrders(doneOrders);
  }, []);

  const markAsCompleted = (index) => {
    const orderToComplete = orders[index];
    const updatedActive = [...orders];
    updatedActive.splice(index, 1);

    const updatedCompleted = [...completedOrders, orderToComplete];

    setOrders(updatedActive);
    setCompletedOrders(updatedCompleted);

    localStorage.setItem('activeOrders', JSON.stringify(updatedActive));
    localStorage.setItem('completedOrders', JSON.stringify(updatedCompleted));
  };

  return (
    <div className="admin-container">
      <div className="admin-main">
        <div className="admin-content">
          <h1>Orders</h1>
          <p>Manage and view orders here.</p>

          <div className="order-stats">
            <div className="stat-card pending">
              <h3>Pending Orders</h3>
              <p>{orders.length}</p>
            </div>
        
            <div className="stat-card completed">
              <h3>Completed Orders</h3>
              <p>{completedOrders.length}</p>
            </div>
          </div>

          <h2>Pending Orders</h2>
          {orders.length > 0 ? (
            <div className="table-responsive">
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Items</th>
                    <th>Total ₹</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, idx) => (
                    <tr key={idx}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.items?.join(', ')}</td>
                      <td>{order.total}</td>
                      <td>
                        <button className="mark-btn" onClick={() => markAsCompleted(idx)}>
                          Mark as Completed
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No pending orders.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
