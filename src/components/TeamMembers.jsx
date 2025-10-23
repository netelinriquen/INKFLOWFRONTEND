import React from 'react';
import '../styles/TeamMembers.css';

const TeamMembers = () => {
  const members = [
    {
      name: 'Adela Parkson',
      role: 'Digital Marketing Manager',
      avatar: '👩‍💼'
    },
    {
      name: 'Christian Sied',
      role: 'UX Designer',
      avatar: '👨‍💻'
    },
    {
      name: 'Jason Wortham',
      role: 'Website Designer',
      avatar: '👨‍🎨'
    }
  ];

  return (
    <div className="team-members">
      <div className="section-header">
        <h3>Team members</h3>
        <button className="more-btn">⋯</button>
      </div>
      
      <div className="members-list">
        {members.map((member, index) => (
          <div key={index} className="member-item">
            <div className="member-avatar">{member.avatar}</div>
            <div className="member-info">
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
            <button className="member-menu">⋯</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;