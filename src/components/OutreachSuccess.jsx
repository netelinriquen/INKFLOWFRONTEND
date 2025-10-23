import React from 'react';
import '../styles/OutreachSuccess.css';

const OutreachSuccess = () => {
  return (
    <div className="outreach-success">
      <div className="section-header">
        <h3>Outreach Success</h3>
        <div className="success-rate">+20%</div>
      </div>
      
      <div className="success-metric">
        <div className="metric-value">5</div>
        <div className="metric-label">Responses This Week</div>
      </div>

      <div className="chart-bars">
        <div className="bar" style={{height: '60%'}}></div>
        <div className="bar" style={{height: '40%'}}></div>
        <div className="bar" style={{height: '80%'}}></div>
        <div className="bar" style={{height: '30%'}}></div>
        <div className="bar" style={{height: '90%'}}></div>
        <div className="bar" style={{height: '70%'}}></div>
        <div className="bar" style={{height: '50%'}}></div>
        <div className="bar" style={{height: '85%'}}></div>
        <div className="bar" style={{height: '45%'}}></div>
      </div>

      <div className="chart-labels">
        <span>01</span>
        <span>07</span>
        <span>14</span>
        <span>21</span>
        <span>28</span>
        <span>4</span>
        <span>11</span>
      </div>
    </div>
  );
};

export default OutreachSuccess;