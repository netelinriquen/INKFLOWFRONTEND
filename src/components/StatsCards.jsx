import React from 'react';
import '../styles/StatsCards.css';

const StatsCards = () => {
  const stats = [
    {
      title: 'Revenue this month',
      value: '$3,050.47',
      icon: '💰',
      color: 'blue'
    },
    {
      title: 'Spend this month',
      value: '$742.39',
      icon: '💳',
      color: 'green'
    },
    {
      title: 'Reports Submitted',
      value: '27',
      icon: '📊',
      color: 'purple'
    },
    {
      title: 'New Tasks',
      value: '154',
      icon: '📋',
      color: 'orange'
    },
    {
      title: 'Completed Tasks',
      value: '2935',
      icon: '✅',
      color: 'teal'
    },
    {
      title: 'Ongoing Projects',
      value: '32',
      icon: '🚀',
      color: 'red'
    }
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card ${stat.color}`}>
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-content">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;