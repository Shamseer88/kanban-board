import React, { useState } from "react";

const AddTask = ({ activeTab, tasks, setTasks }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: taskText,
      status: "todo",
    };
    const updatedTasks = { ...tasks };
    updatedTasks[activeTab].push(newTask);
    setTasks(updatedTasks);
    setTaskText("");
  };
  return (
    <div className="add-task">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default AddTask;
