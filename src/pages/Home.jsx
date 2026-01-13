import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stats = [
    { value: "4", label: "Departments", icon: "fas fa-building" },
    { value: "50+", label: "Expected Papers", icon: "fas fa-file-alt" },
    { value: "10+", label: "Speakers", icon: "fas fa-microphone" },
    { value: "2", label: "Days", icon: "fas fa-calendar" }
  ];

  return (
    <div className="home-page">
      
      {/* About SIT Section */}
      <section className="section-white animate-on-scroll">
        <div className="container-custom">
          <h2 className="section-heading">
            About <span>SIT Mangaluru</span>
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p className="lead-text">
                Srinivas Institute of Technology (SIT) is a premier engineering college 
                re-accredited by NAAC with <strong>A Grade</strong>.
              </p>
              <p>
                Srinivas Institute of Technology (SIT) is one of the premier engineering colleges of the coastal region aiming towards high standards of education with holistic approach. SIT is recognised by AICTE, affiliated to VTU and re-accredited by NAAC with A grade. The Institute started in the year 2006, is a unit of A. Shama Rao Foundation, Mangaluru, and is located at the Srinivas Campus spread over 15 acres of land at Valachil, Arkula Village, about 10kms from Mangaluru city, adjacent to NH66. The institute hosts 3000 plus students studying under 9 UG, 5 PG programmes and 6 Research Centres.
              </p>
              <a href="https://www.sitmng.ac.in" target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
                Know More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference Section */}
      <section className="section-navy animate-on-scroll">
        <div className="container-custom">
          <h2 className="section-heading light">
            About <span>RTIMES 2026</span>
          </h2>
          <div className="conference-intro">
            <p>
              The 5th International Conference on Recent Trends in Mechanical Engineering Science 
              (RTIMES-2026) aims to bring together researchers, academicians, and industry professionals 
              to discuss innovative ideas and cutting-edge research in mechanical engineering.
            </p>
            <div className="conference-highlights">
              <div className="highlight-item">
                <i className="fas fa-globe"></i>
                <span>International Participation</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-award"></i>
                <span>Best Paper Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-stats animate-on-scroll">
        <div className="container-custom">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <i className={stat.icon}></i>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks CTA Section */}
      <section className="section-white animate-on-scroll">
        <div className="container-custom">
          <h2 className="section-heading">
            Conference <span>Tracks</span>
          </h2>
          <div className="tracks-intro-text">
            <p>
              RTIMES-2026 invites researchers, academicians, and industry professionals to submit 
              their original research work in various domains of mechanical engineering.
            </p>
          </div>
          <div className="tracks-cta">
            <Link to="/tracks" className="btn-primary-custom">
              Know More <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section-navy animate-on-scroll" id="dates">
        <div className="container-custom">
          <h2 className="section-heading light">
            Important <span>Dates</span>
          </h2>
          <div className="dates-container">
            <div className="date-card">
              <div className="date-icon"><i className="fas fa-file-upload"></i></div>
              <div className="date-info">
                <h4>Abstract Submission</h4>
                <p>Last date for submission</p>
              </div>
              <div className="date-value">
                <span className="day">15</span>
                <span className="month">Feb 2026</span>
              </div>
            </div>
            {/* Highlighted Date Card */}
            <div className="date-card highlight">
              <div className="date-icon"><i className="fas fa-calendar-check"></i></div>
              <div className="date-info">
                <h4>Conference Dates</h4>
                <p>RTIMES 2026</p>
              </div>
              <div className="date-value">
                <span className="day">17-18</span>
                <span className="month">Apr 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-cta animate-on-scroll">
        <div className="container-custom">
          <div className="cta-content">
            <h2>Ready to Share Your Research?</h2>
            <p>Submit your paper and join leading researchers from around the world</p>
            <div className="cta-buttons">
              <Link to="/call-for-papers" className="btn-cta-primary">
                <i className="fas fa-paper-plane"></i> Submit Abstract
              </Link>
              <Link to="/fee" className="btn-cta-secondary">
                <i className="fas fa-info-circle"></i> Registration Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          NEW: MINIMAL ACKNOWLEDGMENT SECTION
          Matches the style in your screenshots
          ============================================ */}
      <section className="acknowledgement-section animate-on-scroll">
        <div className="container-custom">
          <div className="ack-content-wrapper">
            <h3 className="ack-header-minimal">Acknowledgment</h3>
            <p className="ack-text-minimal">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
              This service was provided for free by Microsoft and they bore all expenses, including costs 
              for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;