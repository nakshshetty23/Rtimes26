import React from 'react';

const AboutSit = () => {
  return (
    <div className="page-container">
      <h2 className="section-title">ABOUT <span>SIT MANGALURU</span></h2>
      <div className="content-card" style={{maxWidth: '1000px', margin: '0 auto', padding: '20px'}}>
        <p style={{lineHeight: '1.8', textAlign: 'justify'}}>
          Srinivas Institute of Technology (SIT) is one of the premier engineering colleges of 
          the coastal region aiming towards high standards of education with a holistic approach. 
          SIT is recognised by AICTE, affiliated to VTU, and re-accredited by NAAC with an 'A' grade.
        </p>
        <p style={{lineHeight: '1.8', textAlign: 'justify', marginTop: '15px'}}>
          The Institute started in the year 2006, is a unit of A. Shama Rao Foundation, Mangaluru, 
          and is located at the Srinivas Campus spread over 15 acres of land at Valachil, Arkula Village.
          The institute hosts 3000 plus students studying under 9 UG, 5 PG programmes and 6 Research Centres.
        </p>
      </div>
    </div>
  );
};

export default AboutSit;