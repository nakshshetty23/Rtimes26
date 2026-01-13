import React, { useEffect, useRef } from 'react';
import './BankDetails.css';

const BankDetails = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const bankDetails = [
    { label: 'Account Name', value: 'SRINIVAS INSTITUTE OF TECHNOLOGY', highlight: true },
    { label: 'Account Number', value: '20065018298' },
    { label: 'Bank Name', value: 'BANK OF MAHARASTRA' },
    { label: 'Branch', value: 'G.H.S ROAD, Mangaluru' },
    { label: 'IFSC Code', value: 'MAHB0000381' }
  ];

  return (
    <div className="bank-page">
      {/* Hero Section */}
      <section className="bank-hero">
        <div className="hero-content">
          <h1>Payment <span>Details</span></h1>
          <p>Complete your RTIMES 2026 registration payment</p>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="payment-section">
        <div className="container-custom">
          <div className="payment-grid">
            {/* Online Transfer Card */}
            <div 
              className="payment-card primary"
              ref={(el) => (sectionsRef.current[0] = el)}
            >
              <div className="card-badge">Recommended</div>
              <div className="card-icon">
                <i className="fas fa-university"></i>
              </div>
              <h2>Online <span>Transfer</span></h2>
              <p className="card-description">Quick and secure online bank transfer</p>
              
              <div className="bank-details-list">
                {bankDetails.map((item, index) => (
                  <div key={index} className="detail-row">
                    <span className="detail-label">{item.label}</span>
                    <span className={`detail-value ${item.highlight ? 'highlight' : ''}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="copy-hint">
                <i className="fas fa-info-circle"></i>
                Please save the transaction receipt for verification
              </div>
            </div>

            {/* Demand Draft Card */}
            <div 
              className="payment-card secondary"
              ref={(el) => (sectionsRef.current[1] = el)}
            >
              <div className="card-icon">
                <i className="fas fa-money-check-alt"></i>
              </div>
              <h2>Demand <span>Draft</span></h2>
              <p className="card-description">Traditional payment method via DD</p>
              
              <div className="dd-details">
                <div className="dd-item">
                  <i className="fas fa-file-invoice-dollar"></i>
                  <div>
                    <h4>DD In Favour Of</h4>
                    <p className="highlight-text">'SRINIVAS INSTITUTE OF TECHNOLOGY'</p>
                  </div>
                </div>
                <div className="dd-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Payable At</h4>
                    <p>BANK OF MAHARASTRA, G.H.S ROAD, Mangaluru, Karnataka State, India</p>
                  </div>
                </div>
                <div className="dd-item">
                  <i className="fas fa-pen"></i>
                  <div>
                    <h4>Important</h4>
                    <p>Write <strong>RTIMES-2026</strong> and your <strong>Paper ID</strong> on the back-side of the DD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bank-contact">
        <div className="container-custom">
          <div 
            className="contact-card"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <div className="contact-left">
              <h2>Contact <span>Convenor</span></h2>
              <p>The Conference Chair & Convenor, RTIMES-26</p>
              <p style={{fontSize: '0.9rem', color: '#4a5568', marginTop: '5px'}}>
                Srinivas Institute of Technology, Merlapadavu, Valachil, Farangipete Post, Mangaluru - 574143
              </p>
            </div>
            <div className="contact-right">
              <a href="tel:+919945925101" className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <span>+91 9945925101</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* ... Brochure and CTA Sections remain the same ... */}
    </div>
  );
};

export default BankDetails;