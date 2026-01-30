import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize Bootstrap dropdowns
    if (typeof window !== 'undefined' && window.$) {
      window.$('.dropdown-toggle').dropdown();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (window.$) {
      window.$('.navbar-collapse').collapse('hide');
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top premium-navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img 
            src="/img/icon1.png" 
            alt="RTIMES Logo" 
            className="navbar-logo"
          />
          <div className="brand-info">
            <span className="brand-name">RTIMES 2026</span>
            <span className="brand-tagline">5th International Conference</span>
          </div>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto align-items-lg-center">
            <li className={`nav-item ${isActive('/')}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="conferenceDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Conference
              </a>
              <div className="dropdown-menu" aria-labelledby="conferenceDropdown">
                <a
                  href="#dates"
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('dates');
                  }}
                >
                  <i className="far fa-calendar-alt"></i>
                  <span>Important Dates</span>
                </a>
                <Link to="/tracks" className="dropdown-item">
                  <i className="fas fa-stream"></i>
                  <span>Conference Tracks</span>
                </Link>
                <Link to="/fee" className="dropdown-item">
                  <i className="fas fa-ticket-alt"></i>
                  <span>Registration Fees</span>
                </Link>
                <Link to="/bank-details" className="dropdown-item">
                  <i className="fas fa-university"></i>
                  <span>Bank Details</span>
                </Link>
              </div>
            </li>

            <li className={`nav-item ${isActive('/call-for-papers')}`}>
              <Link to="/call-for-papers" className="nav-link">Call for Papers</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="speakersDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Speakers
              </a>
              <div className="dropdown-menu" aria-labelledby="speakersDropdown">
                <Link to="/keynote-speakers" className="dropdown-item">
                  <i className="fas fa-star"></i>
                  <span>Keynote Speakers</span>
                </Link>
                <Link to="/invited-speakers" className="dropdown-item">
                  <i className="fas fa-users"></i>
                  <span>Invited Speakers</span>
                </Link>
              </div>
            </li>

            <li className={`nav-item ${isActive('/tracks')}`}>
              <Link to="/tracks" className="nav-link">Tracks</Link>
            </li>

            <li className={`nav-item ${isActive('/fee')}`}>
              <Link to="/fee" className="nav-link">Registration</Link>
            </li>

            <li className={`nav-item ${isActive('/contact')}`}>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>

            {/* Register Button */}
            <li className="nav-item nav-cta">
              <Link to="/fee" className="btn-register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;