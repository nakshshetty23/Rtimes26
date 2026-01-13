import React, { useEffect, useRef } from 'react';
import './CallForPapers.css';

const CallForPapers = () => {
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

  const submissionSteps = [
    { step: 1, title: 'Submit Abstract', description: 'Submit your abstract through the online submission portal by the deadline.', icon: 'fas fa-file-alt' },
    { step: 2, title: 'Peer Review', description: 'Wait for the acceptance notification after rigorous peer review.', icon: 'fas fa-search' },
    { step: 3, title: 'Full Paper', description: 'Submit the full paper after receiving acceptance notification.', icon: 'fas fa-file-upload' },
    { step: 4, title: 'Revisions', description: 'Incorporate reviewer comments and submit the final camera-ready version.', icon: 'fas fa-edit' },
    { step: 5, title: 'Registration', description: 'Complete the registration process to confirm your presentation.', icon: 'fas fa-check-circle' }
  ];

  const paperFormat = [
    { label: 'Abstract', value: '250-300 words', icon: 'fas fa-align-left' },
    { label: 'Full Paper', value: 'Max 8 pages', icon: 'fas fa-file-alt' },
    { label: 'Format', value: 'A4, Single column', icon: 'fas fa-columns' },
    { label: 'Font', value: 'Times New Roman 12pt', icon: 'fas fa-font' },
    { label: 'Margins', value: '1 inch (2.54 cm)', icon: 'fas fa-arrows-alt-h' },
    { label: 'Line Spacing', value: '1.5 spacing', icon: 'fas fa-text-height' }
  ];

  return (
    <div className="cfp-page">
      {/* Hero Section */}
      <section className="cfp-hero">
        <div className="hero-content">
          <h1>Call For <span>Papers</span></h1>
          <p>Submit your innovative research to RTIMES 2026</p>
          <a href="mailto:rtimes26@sitmng.ac.in" className="hero-btn">
            <i className="fas fa-paper-plane"></i>
            Submit Now
          </a>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="cfp-section instructions-section">
        <div className="container-custom">
          <div 
            className="content-card"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <div className="card-header-custom">
              <div className="header-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <h2>Instructions for <span>Authors</span></h2>
            </div>
            <div className="card-body-custom">
              <ul className="styled-list">
                <li>
                  <i className="fas fa-check"></i>
                  Authors are invited to submit original research papers, review articles, and case studies related to the conference tracks.
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  All submissions will undergo a rigorous peer-review process by expert reviewers.
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  Papers must be original and should not have been published or submitted elsewhere.
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  The language of the conference is English. Papers must be written in clear, grammatically correct English.
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  Authors should prepare their manuscripts according to the template provided.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Format Section */}
      <section className="cfp-section format-section">
        <div className="container-custom">
          <div className="section-header">
            <h2>Paper <span>Format</span></h2>
            <p>Follow these guidelines for your manuscript</p>
          </div>
          <div className="format-grid">
            {paperFormat.map((item, index) => (
              <div 
                key={index} 
                className="format-card"
                ref={(el) => (sectionsRef.current[1 + index] = el)}
              >
                <div className="format-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Process Section */}
      <section className="cfp-section process-section">
        <div className="container-custom">
          <div className="section-header light">
            <h2>Submission <span>Process</span></h2>
            <p>Follow these simple steps to submit your paper</p>
          </div>
          <div className="process-timeline">
            {submissionSteps.map((item, index) => (
              <div 
                key={index} 
                className="timeline-item"
                ref={(el) => (sectionsRef.current[7 + index] = el)}
              >
                <div className="timeline-number">{item.step}</div>
                <div className="timeline-content">
                  <div className="timeline-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Section */}
      <section className="cfp-section publication-section">
        <div className="container-custom">
          <div 
            className="publication-card"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <div className="publication-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="publication-content">
              <h2>Publication <span>Opportunity</span></h2>
              <p>
                Accepted and presented papers will be published in conference proceedings. 
                Selected high-quality papers will be recommended for publication in reputed 
                journals indexed in <strong>Scopus/Web of Science</strong>. Authors will retain 
                the copyright of their work while granting the conference organizers the right 
                to publish and distribute the papers.
              </p>
              <div className="publication-badges">
                <span className="badge"><i className="fas fa-globe"></i> Scopus Indexed</span>
                <span className="badge"><i className="fas fa-database"></i> Web of Science</span>
                <span className="badge"><i className="fas fa-shield-alt"></i> Copyright Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="cfp-cta">
        <div className="container-custom">
          <div className="cta-content">
            <h2>Ready to Submit Your Paper?</h2>
            <p>Contact us for any queries regarding paper submission</p>
            <div className="cta-info">
              <a href="mailto:rtimes26@sitmng.ac.in" className="cta-item">
                <i className="fas fa-envelope"></i>
                <span>rtimes26@sitmng.ac.in</span>
              </a>
              <a href="tel:+919945925101" className="cta-item">
                <i className="fas fa-phone-alt"></i>
                <span>+91 9945925101</span>
              </a>
            </div>
            <div className="cta-buttons">
              <a href="mailto:rtimes26@sitmng.ac.in" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Submit Paper
              </a>
              <a href="/tracks" className="btn btn-outline">
                <i className="fas fa-th-list"></i>
                View Tracks
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;
