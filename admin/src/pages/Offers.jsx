import React, { useState } from 'react';
import './Offers.css';

const OfferManager = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (newOffer.title && newOffer.description) {
      setOffers([...offers, { ...newOffer, id: Date.now() }]);
      setNewOffer({ title: '', description: '', image: null });
    }
  };

  const handleDelete = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  const handleEdit = (id) => {
    const offer = offers.find((o) => o.id === id);
    setNewOffer(offer);
    handleDelete(id);
  };

  return (
    <div className="admin-container">
      <div className="admin-main">
        <div className="admin-content">
          <h1>Offer Manager</h1>
          <p>Manage special offers and promotions here.</p>

          <div className="offer-form">
            <input
              type="text"
              name="title"
              placeholder="Offer Title"
              value={newOffer.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Offer Description"
              rows="3"
              value={newOffer.description}
              onChange={handleChange}
            />
          
            <button onClick={handleAdd}>Add / Update Offer</button>
          </div>

          <div className="offer-list">
            <h2>Current Offers</h2>
            {offers.length === 0 ? (
              <p>No offers added yet.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {offers.map((offer) => (
                    <tr key={offer.id}>
                      <td>
                        {offer.image && (
                          <img src={offer.image} alt="Offer" className="offer-img" />
                        )}
                      </td>
                      <td>{offer.title}</td>
                      <td>{offer.description}</td>
                      <td>
                        <button onClick={() => handleEdit(offer.id)}>Edit</button>
                        <button className="delete" onClick={() => handleDelete(offer.id)}>
                          Delete
                        </button>
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

export default OfferManager;
