import React from 'react';
import './KeynoteSpeakers.css';

const KeynoteSpeakers = () => {
  const keynoteSpeakers = [
    {
      name: 'Dr. Shrikantha S. Rao',
      image: '/img/Dr.Shrikantha S.Rao.jpeg',
      designation: 'Professor',
      department: 'Department of Mechanical Engineering',
      institution: 'National Institute of Technology Karnataka, (NITK) Surathkal',
    },
    {
      name: 'Dr. Sanjay M R',
      image: '/img/dr. Sanjay M R.jpeg',
      designation: 'Principal Research Scientist (Specialist 3) & Associate Professor',
      department: 'Research Center',
      institution: 'King Mongkut’s University of Technology, Thailand',
    },
    {
      name: 'Dr. Vasu M',
      image: '/img/Dr. Vasu M.jpeg',
      designation: 'Assistant Professor',
      department: 'Department of Production Engineering',
      institution: 'National Institute of Technology, (NIT) Tiruchirappalli',
    }
  ];

  return (
    <div className="speakers-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="page-title">Keynote <span>Speakers</span></h1>
          <p className="page-subtitle">
            Distinguished experts sharing global research insights at RTIMES-2026
          </p>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section">
        <div className="container-custom">
          <p className="intro-text">
            We are honored to host distinguished speakers from premier national and 
            international institutions to share their expertise at RTIMES-2026.
          </p>

          <div className="speakers-grid">
            {keynoteSpeakers.map((speaker, index) => (
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
                  
                  {/* Safety check: Only show expertise if the data exists */}
                  {speaker.expertise && (
                    <div className="speaker-expertise">
                      {speaker.expertise.map((skill, i) => (
                        <span key={i} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="more-speakers-note">
            <i className="fas fa-info-circle"></i>
            <p>More keynote speakers will be announced soon. Stay tuned for further updates!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeynoteSpeakers;