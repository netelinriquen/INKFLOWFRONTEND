import React from 'react';
import '../styles/WeeklyReports.css';

const WeeklyReports = () => {
  const reports = [
    {
      name: 'Jonathan Sandoval',
      status: 'In Progress',
      size: '56 MB',
      date: '10 Jun 2024',
      time: '04:41PM'
    },
    {
      name: 'Matt Doherty',
      status: 'In Progress',
      size: '45 MB',
      date: '10 Jun 2024',
      time: '04:40PM'
    },
    {
      name: 'Adela Parkson',
      status: 'Submitted',
      size: '98 MB',
      date: '10 Jun 2024',
      time: '04:37PM'
    },
    {
      name: 'Miguel Chavez',
      status: 'Submitted',
      size: '25 MB',
      date: '10 Jun 2024',
      time: '04:31PM'
    }
  ];

  return (
    <div className="weekly-reports">
      <h3>Weekly Reports</h3>
      
      <div className="reports-table">
        <div className="table-header">
          <div className="header-cell">Name</div>
          <div className="header-cell">Status</div>
          <div className="header-cell">Size</div>
          <div className="header-cell">Date</div>
          <div className="header-cell">Time</div>
        </div>
        
        <div className="table-body">
          {reports.map((report, index) => (
            <div key={index} className="table-row">
              <div className="table-cell name">{report.name}</div>
              <div className="table-cell">
                <span className={`status ${report.status.toLowerCase().replace(' ', '-')}`}>
                  {report.status}
                </span>
              </div>
              <div className="table-cell">{report.size}</div>
              <div className="table-cell">{report.date}</div>
              <div className="table-cell">{report.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyReports;