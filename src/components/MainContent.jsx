import React from 'react';
import StatsCards from './StatsCards';
import Chart from './Chart';
import ProjectCompletion from './ProjectCompletion';
import TeamMembers from './TeamMembers';
import Tasks from './Tasks';
import OutreachSuccess from './OutreachSuccess';
import ServerStorage from './ServerStorage';
import WeeklyReports from './WeeklyReports';
import '../styles/MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <div className="breadcrumb">
          <span>Pages / Dashboard</span>
          <h1>Main Dashboard</h1>
        </div>
        <div className="user-profile">
          <div className="user-avatar">👤</div>
        </div>
      </div>

      <StatsCards />
      
      <div className="dashboard-grid">
        <div className="chart-section">
          <Chart />
        </div>
        <div className="project-completion">
          <ProjectCompletion />
        </div>
      </div>

      <div className="dashboard-grid-2">
        <div className="team-section">
          <TeamMembers />
        </div>
        <div className="tasks-section">
          <Tasks />
        </div>
        <div className="outreach-section">
          <OutreachSuccess />
        </div>
        <div className="storage-section">
          <ServerStorage />
        </div>
      </div>

      <WeeklyReports />
    </div>
  );
};

export default MainContent;