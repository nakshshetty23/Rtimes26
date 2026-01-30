import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="rtimes-footer">
      <div className="rtimes-footer-wrapper">
        <div className="rtimes-footer-grid">
          
          {/* Conference Info */}
          <div className="rtimes-footer-col">
            <h3 className="rtimes-footer-heading">RTIMES 2026</h3>
            <p className="rtimes-footer-text">5th International Conference on Recent Trends in Mechanical Engineering Sciences</p>
            <p className="rtimes-footer-date">📅 April 17-18, 2026</p>
          </div>
          
          {/* Contact Info */}
          <div className="rtimes-footer-col">
            <h3 className="rtimes-footer-heading">Contact</h3>
            <p className="rtimes-footer-text">Srinivas Institute of Technology</p>
            <p className="rtimes-footer-text">Valachil, Mangaluru</p>
            <p className="rtimes-footer-text">Karnataka - 574143, India</p>
            <a href="mailto:rtimes26@sitmng.ac.in" className="rtimes-footer-link">
              ✉ rtimes26@sitmng.ac.in
            </a>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="rtimes-footer-copyright">
          <p>© 2026 RTIMES. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
