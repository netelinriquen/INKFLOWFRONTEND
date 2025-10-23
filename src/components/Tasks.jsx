import React from 'react';
import '../styles/Tasks.css';

const Tasks = () => {
  const tasks = [
    {
      title: 'Check Conversion Analytics',
      completed: false
    },
    {
      title: 'Launch New Portfolio',
      completed: true
    },
    {
      title: 'Design Client Website',
      completed: true
    },
    {
      title: 'Develop Client Website',
      completed: false
    },
    {
      title: 'Begin Digital Marketing',
      completed: true
    }
  ];

  return (
    <div className="tasks">
      <div className="section-header">
        <h3>Tasks</h3>
        <button className="more-btn">⋯</button>
      </div>
      
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <div className={`task-checkbox ${task.completed ? 'completed' : ''}`}>
              {task.completed ? '✓' : ''}
            </div>
            <span className={`task-title ${task.completed ? 'completed' : ''}`}>
              {task.title}
            </span>
            <button className="task-menu">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;