import React from 'react';
import '../styles/ServerStorage.css';

const ServerStorage = () => {
  return (
    <div className="server-storage">
      <div className="section-header">
        <h3>Server Storage</h3>
        <select className="period-select">
          <option>Monthly</option>
        </select>
      </div>
      
      <div className="storage-chart">
        <div className="donut-chart">
          <svg viewBox="0 0 100 100" className="donut-svg">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#2a2a2a"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="8"
              strokeDasharray="188.5"
              strokeDashoffset="47"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
        
        <div className="storage-legend">
          <div className="legend-item">
            <span className="legend-dot web-files"></span>
            <span>Web files</span>
            <span className="percentage">63%</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot system"></span>
            <span>System</span>
            <span className="percentage">25%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerStorage;