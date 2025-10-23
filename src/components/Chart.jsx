import React from 'react';
import '../styles/Chart.css';

const Chart = () => {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="chart-info">
          <div className="chart-period">YTD</div>
          <div className="chart-value">$7.5K</div>
          <div className="chart-change">Total Spent ↗ +2.45%</div>
        </div>
        <div className="chart-badge">$10.5K</div>
      </div>
      
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot on-track"></span>
          <span>On track</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot this-year"></span>
          <span>This Year</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot last-year"></span>
          <span>Last Year</span>
        </div>
      </div>

      <div className="chart-area">
        <svg viewBox="0 0 400 200" className="chart-svg">
          {/* Linhas do gráfico */}
          <path
            d="M 20 150 Q 80 120 120 140 T 200 100 T 280 120 T 360 80"
            stroke="#ff6b35"
            strokeWidth="3"
            fill="none"
            className="chart-line orange"
          />
          <path
            d="M 20 170 Q 80 160 120 150 T 200 140 T 280 160 T 360 140"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            className="chart-line white"
          />
        </svg>
        
        <div className="chart-months">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;