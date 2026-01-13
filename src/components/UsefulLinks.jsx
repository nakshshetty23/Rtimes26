import React from 'react';
import { Link } from 'react-router-dom';
import './UsefulLinks.css';

const UsefulLinks = () => {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/call-for-papers', label: 'Call for Papers' },
    { to: '/tracks', label: 'Conference Tracks' },
    { to: '/fee', label: 'Registration' },
    { to: '/keynote-speakers', label: 'Keynote Speakers' },
    { to: '/contact', label: 'Contact Us' }
  ];

  const importantDates = [
    { date: '15 Feb 2026', event: 'Abstract Submission' },
    { date: '25 Feb 2026', event: 'Acceptance Notification' },
    { date: '5 Apr 2026', event: 'Full Paper Submission' },
    { date: '17-18 Apr 2026', event: 'Conference Dates' }
  ];

  return (
    <footer className="premium-footer">
      {/* Pre-footer CTA */}
      <div className="footer-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h3>Ready to Submit Your Research?</h3>
            <p>Join leading researchers at RTIMES 2026</p>
          </div>
          <div className="cta-buttons">
            <a href="mailto:rtimes26@sitmng.ac.in" className="cta-btn primary">
              <i className="fas fa-paper-plane"></i>
              Submit Paper
            </a>
            <Link to="/fee" className="cta-btn secondary">
              <i className="fas fa-user-plus"></i>
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Column 1: Brand & About */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src="/img/icon1.png" alt="RTIMES Logo" className="brand-logo" />
              <div className="brand-info">
                <h3>RTIMES 2026</h3>
                <span> International Conference</span>
              </div>
            </div>
            <p className="brand-description">
               International Conference on Recent Trends in Mechanical Engineering Science, 
              bringing together global researchers and industry experts.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>
                    <i className="fas fa-angle-right"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Dates */}
          <div className="footer-col">
            <h4>Important Dates</h4>
            <ul className="dates-list">
              {importantDates.map((item, index) => (
                <li key={index}>
                  <span className="date-badge">{item.date}</span>
                  <span className="date-event">{item.event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <strong>Srinivas Institute of Technology</strong>
                  <span>Valachil, Mangaluru - 574143, Karnataka</span>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <a href="mailto:rtimes26@sitmng.ac.in">rtimes26@sitmng.ac.in</a>
                </div>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <a href="tel:+919945925101">+91 9945925101</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <div className="copyright">
            <p>© 2026 RTIMES - IEEE International Conference on Recent Trends in Mechanical Engineering Science.</p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="footer-badges">
            <span className="badge">
              <i className="fas fa-shield-alt"></i> IEEE Approved
            </span>
            <span className="badge">
              <i className="fas fa-globe"></i> International
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UsefulLinks;