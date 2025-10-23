import React from 'react';
import '../styles/ProjectCompletion.css';

const ProjectCompletion = () => {
  const projects = [
    { name: 'Create...', progress: 95 },
    { name: 'Update...', progress: 80 },
    { name: 'Send m...', progress: 85 },
    { name: 'Debug...', progress: 70 },
    { name: 'Chang...', progress: 60 }
  ];

  return (
    <div className="project-completion">
      <h3>Project Completion</h3>
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-name">{project.name}</div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="completion-scale">
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(num => (
          <span key={num}>{num}%</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCompletion;