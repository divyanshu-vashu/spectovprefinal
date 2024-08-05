// src/components/Donations.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../Styles/Donations.css';
Modal.setAppElement('#root');

const Donations = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAccept = () => {
    closeModal();
    navigate('/donation'); // Navigate to the DonationPage
  };

  return (
    <div className="donations-container">
      <div className="banner">
        <h1>Why Donate?</h1>
        <ul>
            <li>Empower communication with real-time translations.</li>
            <li>Promote inclusivity by making our glasses accessible to more people.</li>
            <li>Innovate for the benefit of the deaf and hard-of-hearing community.</li>
        </ul>
      </div>
      <button onClick={openModal} className="donate-button">
        Donate now
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Accept Terms and Conditions"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Terms and Conditions</h2>
        <p>Please accept the terms and conditions to proceed with your donation.</p>
        <button onClick={handleAccept} className="accept-button">
          Accept
        </button>
        <button onClick={closeModal} className="close-button">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Donations;
