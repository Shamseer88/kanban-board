import React from "react";

const TaskColumn = ({ title, tasks, onTaskClick, backgroundColor }) => {
  return (
    <div className="task-column" style={{ backgroundColor: backgroundColor }}>
      <h3>{title}</h3>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task-card"
          onClick={() => onTaskClick(task)}
        >
          {task.text}
        </div>
      ))}
    </div>
  );
};

export default TaskColumn;
