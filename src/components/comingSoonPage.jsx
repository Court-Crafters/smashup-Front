import React from 'react';
import './comingSoonPage.css';

const ComingSoonPage = () => {
  return (
    <div className="coming-soon-page">
      <div className="overlay">
        <div className="content">
          {/* Replace with your actual logo path */}
          <img src="/p4p-logo.png" alt="P4P Logo" className="logo" />
          <h1 className="heading">Coming Soon</h1>
          <p className="description">We’re working hard to bring you something amazing. Stay tuned!</p>
          <div className="footer">
            <p>&copy; 2025 Padel4Passion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
