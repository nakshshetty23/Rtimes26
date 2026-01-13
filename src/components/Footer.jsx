import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-content">
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-sit">About SIT</Link></li>
              <li><Link to="/call-for-papers">Call for Papers</Link></li>
              <li><Link to="/tracks">Conference Tracks</Link></li>
              <li><Link to="/fee">Registration Fee</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><strong>Srinivas Institute of Technology</strong></p>
              <p>Valachil, Merlapadavu, Mangaluru</p>
              <p>Karnataka - 574143, India</p>
              <p>Email: <a href="mailto:rtimes26@sitmng.ac.in">rtimes26@sitmng.ac.in</a></p>
            </div>
          </div>

          <div className="footer-section">
            <h4>RTIMES 2026</h4>
            <div className="conference-info">
              <p>5th International Conference on</p>
              <p>Recent Trends in Image Processing</p>
              <p>and Machine Learning</p>
              <p><strong>April 17-18, 2026</strong></p>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RTIMES. All Rights Reserved.</p>
        <p className="managed-by">Managed by DeepakAcharyaK</p>
      </div>
    </footer>
  );
};

export default Footer;
