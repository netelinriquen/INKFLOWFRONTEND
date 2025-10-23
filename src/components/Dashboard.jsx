import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import '../styles/Dashboard.css';

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard">
      <Sidebar onLogout={onLogout} />
      <MainContent />
    </div>
  );
};

export default Dashboard;