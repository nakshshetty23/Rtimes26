import React from 'react';
import './Acknowledgement.css';

const Acknowledgement = () => {
  return (
    <section className="acknowledgement-section">
      <div className="container-custom">
        <div className="ack-card">
          <div className="ack-icon">
            <i className="fas fa-hands-helping"></i>
          </div>
          <div className="ack-content">
            <h4 className="ack-header">Technical <span>Acknowledgement</span></h4>
            <p className="ack-text">
              The <strong>Microsoft CMT service</strong> was used for managing the peer-reviewing process for this conference. 
              This service was provided for free by <strong>Microsoft</strong> and they bore all expenses, including costs 
              for Azure cloud services as well as for software development and support.
            </p>
          </div>
          <div className="microsoft-logo-area">
             {/* Replace with your local Microsoft logo path */}
            <img src="/img/microsoft-logo.png" alt="Microsoft CMT" className="ms-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgement;