import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>CMSolutions</h2>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-item active">
          <i className="icon-dashboard"></i>
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <i className="icon-analytics"></i>
          <span>Analytics</span>
        </div>
        <div className="nav-item">
          <i className="icon-database"></i>
          <span>Databases</span>
        </div>
        <div className="nav-item">
          <i className="icon-help"></i>
          <span>Help</span>
        </div>
        <div className="nav-item">
          <i className="icon-settings"></i>
          <span>Settings</span>
        </div>
        <div className="nav-item">
          <i className="icon-profile"></i>
          <span>Profile</span>
        </div>
        <div className="nav-item" onClick={onLogout}>
          <i className="icon-logout"></i>
          <span>Log Out</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;