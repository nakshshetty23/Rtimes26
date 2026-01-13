import React from 'react';
import './InvitedSpeakers.css';

const InvitedSpeakers = () => {
  const invitedSpeakers = [
    {
      name: 'Dr. Ashok Narayanan',
      image: '/img/ashok-narayanan1.jpg',
      designation: 'Senior Scientist',
      department: 'CSIR - National Aerospace Laboratories',
      institution: 'Bangalore',
      expertise: ['Aerospace Structures', 'Composite Materials'],
    },
    {
      name: 'Dr. L M Nayak',
      image: '/img/lm_nayak.jpg',
      designation: 'Professor',
      department: 'Department of Marine Engineering',
      institution: 'Indian Maritime University',
      expertise: ['Marine Propulsion', 'Ship Design'],
    },
    {
      name: 'Dr. Manjaiah',
      image: '/img/manjaiah.jpg',
      designation: 'Associate Professor',
      department: 'Department of Mechanical Engineering',
      institution: 'Malnad College of Engineering',
      expertise: ['Additive Manufacturing', 'Materials Processing'],
    },
    {
      name: 'Dr. Ramakrishna',
      image: '/img/ramakrishna.jpg',
      designation: 'Professor',
      department: 'Department of Automobile Engineering',
      institution: 'RV College of Engineering',
      expertise: ['Automotive Systems', 'Electric Vehicles'],
    },
    {
      name: 'Dr. Anarghya',
      image: '/img/anarghya.jpeg',
      designation: 'Assistant Professor',
      department: 'Department of Computer Science',
      institution: 'NMAM Institute of Technology',
      expertise: ['Artificial Intelligence', 'Machine Learning'],
    },
    {
      name: 'Dr. Gangadharan',
      image: '/img/gangadharan.jpeg',
      designation: 'Professor',
      department: 'Department of Mechanical Engineering',
      institution: 'MIT Manipal',
      expertise: ['Thermal Systems', 'Energy Conversion'],
    },
  ];

  return (
    <div className="speakers-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="page-title">Invited Speakers</h1>
          <p className="page-subtitle">
            Industry experts and researchers presenting at RTIMES-2026
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section">
        <div className="container-custom">
          <p className="intro-text">
            RTIMES-2026 features distinguished invited speakers from academia and industry who will
            present their cutting-edge research and developments in mechanical engineering sciences.
          </p>

          <div className="speakers-grid invited-grid">
            {invitedSpeakers.map((speaker, index) => (
              <div key={index} className="speaker-card">
                <div className="speaker-image-wrapper">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="speaker-image"
                  />
                  <div className="speaker-overlay">
                    <div className="social-links">
                      <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#" className="social-link"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-info">
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-designation">{speaker.designation}</p>
                  <p className="speaker-department">{speaker.department}</p>
                  <p className="speaker-institution">{speaker.institution}</p>
                  <div className="speaker-expertise">
                    {speaker.expertise.map((skill, i) => (
                      <span key={i} className="expertise-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="more-speakers-note">
            <i className="fas fa-info-circle"></i>
            <p>More invited speakers will be announced soon. Stay tuned for updates!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvitedSpeakers;
