import React from 'react';
import './Tracks.css';

const Tracks = () => {
  const tracks = [
    {
      num: 1,
      title: 'Advanced Manufacturing and Materials',
      icon: 'fas fa-cogs',
      description: 'Cutting-edge manufacturing technologies including additive manufacturing (3D printing), CNC machining, composite materials, nanomaterials, smart materials, material characterization, surface engineering, and innovative manufacturing processes.',
    },
    {
      num: 2,
      title: 'Aerospace and Aeronautical Innovations',
      icon: 'fas fa-plane',
      description: 'Aircraft design and analysis, aerodynamics, propulsion systems, avionics, unmanned aerial vehicles (UAVs), space technology, satellite systems, aerospace structures, flight mechanics, and CFD applications.',
    },
    {
      num: 3,
      title: 'Automotive Engineering and Smart Mobility',
      icon: 'fas fa-car',
      description: 'Electric vehicles (EVs), hybrid vehicles, autonomous vehicles, vehicle dynamics, automotive safety systems, intelligent transportation systems, alternative fuels, and sustainable mobility solutions.',
    },
    {
      num: 4,
      title: 'Marine and Offshore Engineering',
      icon: 'fas fa-ship',
      description: 'Ship design and construction, marine propulsion systems, hydrodynamics, offshore structures, ocean energy harvesting, underwater robotics, marine pollution control, and naval architecture.',
    },
    {
      num: 5,
      title: 'Thermal and Fluid Sciences',
      icon: 'fas fa-fire',
      description: 'Heat transfer, thermodynamics, fluid mechanics, combustion, refrigeration, heat exchangers, turbomachinery, HVAC systems, multiphase flow, and energy conversion systems.',
    },
    {
      num: 6,
      title: 'Robotics and Automation',
      icon: 'fas fa-robot',
      description: 'Industrial robotics, collaborative robots (cobots), mechatronics, control systems, automation, robotic vision, machine learning for robotics, autonomous systems, and Industry 4.0.',
    },
    {
      num: 7,
      title: 'Renewable Energy and Sustainability',
      icon: 'fas fa-solar-panel',
      description: 'Solar energy, wind energy, biomass, biofuels, hydropower, geothermal energy, energy storage, fuel cells, sustainable engineering, and circular economy in engineering.',
    },
    {
      num: 8,
      title: 'Computational and AI-Driven Engineering',
      icon: 'fas fa-brain',
      description: 'Machine learning and deep learning applications, optimization algorithms, FEA, predictive maintenance, digital twins, data-driven design, and smart manufacturing using AI.',
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <h1 className="page-title">Conference Tracks</h1>
          <p className="page-subtitle">
            Explore the research areas covered at RTIMES-2026
          </p>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="section-white">
        <div className="container-custom">
          <p className="intro-text">
            RTIMES-2026 welcomes research contributions in the following tracks. Authors are
            encouraged to submit papers that align with one or more of these themes.
          </p>

          <div className="tracks-list">
            {tracks.map((track) => (
              <div key={track.num} className="track-item-card">
                <div className="track-header">
                  <div className="track-icon">
                    <i className={track.icon}></i>
                  </div>
                  <div className="track-title-section">
                    <span className="track-label">Track {track.num}</span>
                    <h3 className="track-name">{track.title}</h3>
                  </div>
                </div>
                <p className="track-description">{track.description}</p>
              </div>
            ))}
          </div>

          <div className="info-note">
            <i className="fas fa-info-circle"></i>
            <p>
              Papers addressing interdisciplinary topics spanning multiple tracks are also welcome.
              Authors should indicate the primary track during submission.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tracks;
