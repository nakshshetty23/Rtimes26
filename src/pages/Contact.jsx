import React, { useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      info: 'rtimes26@sitmng.ac.in',
      description: 'We respond within 24 hours',
      link: 'mailto:rtimes26@sitmng.ac.in'
    },
    {
      icon: 'fas fa-phone-alt',
      title: 'Call Us',
      info: '+91 9945925101',
      description: 'Mon-Fri, 9AM-5PM IST',
      link: 'tel:+919945925101'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      info: 'Srinivas Institute of Technology',
      description: 'Mangaluru, Karnataka',
      link: 'https://maps.google.com/?q=Srinivas+Institute+of+Technology'
    }
  ];

  const queryTypes = [
    {
      icon: 'fas fa-file-alt',
      title: 'Paper Submission',
      description: 'Queries related to paper submission, abstract format, and publication guidelines.',
      email: 'rtimes26@sitmng.ac.in',
      color: 'orange'
    },
    {
      icon: 'fas fa-user-plus',
      title: 'Registration',
      description: 'Registration process, fees structure, and payment related queries.',
      email: 'rtimes26@sitmng.ac.in',
      color: 'navy'
    },
    {
      icon: 'fas fa-plane',
      title: 'Travel & Accommodation',
      description: 'Travel arrangements, accommodation options, and venue information.',
      phone: '+91 9945925101',
      color: 'gold'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in <span>Touch</span></h1>
          <p>Have questions about RTIMES 2026? We're here to help!</p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="contact-methods">
        <div className="container-custom">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <a 
                href={method.link}
                key={index} 
                className="method-card"
                ref={(el) => (cardsRef.current[index] = el)}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <div className="method-icon">
                  <i className={method.icon}></i>
                </div>
                <h3>{method.title}</h3>
                <p className="method-info">{method.info}</p>
                <span className="method-description">{method.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container-custom">
          <div className="contact-grid">
            {/* Contact Information */}
            <div 
              className="contact-info-card"
              ref={(el) => (cardsRef.current[3] = el)}
            >
              <h2>Conference <span>Information</span></h2>
              
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-university"></i>
                </div>
                <div className="info-content">
                  <h4>Conference Chair & Convenor</h4>
                  <p>RTIMES-2026</p>
                  <p>Srinivas Institute of Technology</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-pin"></i>
                </div>
                <div className="info-content">
                  <h4>Full Address</h4>
                  <p>Srinivas Institute of Technology</p>
                  <p>Merlapadavu, Valachil, Farangipete Post</p>
                  <p>Mangaluru - 574143</p>
                  <p>Karnataka, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h4>Office Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 5:00 PM (IST)</p>
                  <p>Saturday: 9:00 AM - 1:00 PM (IST)</p>
                  <p className="closed">Sunday & Holidays: Closed</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Map Section */}
            <div 
              className="map-card"
              ref={(el) => (cardsRef.current[4] = el)}
            >
              <h2>Venue <span>Location</span></h2>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.494627237713!2d74.93700351433411!3d12.8758845909187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3585ea5927d6f%3A0xc65abe4f89ccf8ab!2sSrinivas%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1584303811504!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="SIT Location"
                ></iframe>
              </div>
              <a 
                href="https://maps.google.com/?q=Srinivas+Institute+of+Technology"
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <i className="fas fa-directions"></i>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Query Types Section */}
      <section className="query-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>For <span>Different Queries</span></h2>
            <p>Reach out to the right team for faster assistance</p>
          </div>

          <div className="query-grid">
            {queryTypes.map((query, index) => (
              <div 
                key={index} 
                className={`query-card ${query.color}`}
                ref={(el) => (cardsRef.current[5 + index] = el)}
              >
                <div className="query-icon">
                  <i className={query.icon}></i>
                </div>
                <h3>{query.title}</h3>
                <p>{query.description}</p>
                <div className="query-contact">
                  {query.email && (
                    <a href={`mailto:${query.email}`}>
                      <i className="fas fa-envelope"></i>
                      {query.email}
                    </a>
                  )}
                  {query.phone && (
                    <a href={`tel:${query.phone}`}>
                      <i className="fas fa-phone"></i>
                      {query.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container-custom">
          <div className="cta-content">
            <h2>Ready to Join RTIMES 2026?</h2>
            <p>Submit your research paper and be part of this prestigious conference</p>
            <div className="cta-buttons">
              <a href="/call-for-papers" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Submit Paper
              </a>
              <a href="/fee" className="btn btn-outline">
                <i className="fas fa-rupee-sign"></i>
                View Registration Fee
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
