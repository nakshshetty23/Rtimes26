import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  // Conference date: April 17, 2026
  const conferenceDate = new Date('2026-04-17T09:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span>5th International Conference</span>
        </div>

        <h1 className="hero-title">
          <span className="title-small">5th International Conference on</span>
          <span className="title-main">
            <span className="highlight">R</span>ecent <span className="highlight">T</span>rends in 
            <span className="highlight"> M</span>echanical <span className="highlight">E</span>ngineering 
            <span className="highlight"> S</span>ciences
          </span>
        </h1>

        <p className="hero-subtitle">
          “Innovation for Sustainable Future”
        </p>

        <div className="hero-meta">
          <div className="meta-item">
            <i className="fas fa-calendar-alt"></i>
            <span>April 17-18, 2026</span>
          </div>
          <div className="meta-divider"></div>
          <div className="meta-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Srinivas Institute of Technology, Mangaluru</span>
          </div>
        </div>

        <p className="hero-organizer">
          Jointly organized by the Departments of Aeronautical, Automobile, Marine & Mechanical Engineering
        </p>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <h4 className="countdown-title">Conference Starts In</h4>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a href="/call-for-papers" className="btn-hero-primary">
            <i className="fas fa-paper-plane"></i> Submit Paper
          </a>
          <a href="/fee" className="btn-hero-secondary">
            <i className="fas fa-user-plus"></i> Register Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Slider;