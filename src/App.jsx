import React, { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import {
  loadActiveTab,
  loadTasks,
  saveActiveTab,
  saveTasks,
} from "./utils/localStorage";
import AddTask from "./components/AddTask";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const [activeTab, setActiveTab] = useState(loadActiveTab());
  const [tasks, setTasks] = useState(loadTasks());
  const [editingTask, setEditingTask] = useState(null);

  const handleTaskClick = (task) => {
    setEditingTask(task);
  };

  const handleStatusChange = (taskid, newStatus) => {
    const updatedtasks = { ...tasks };
    Object.keys(updatedtasks).forEach((key) => {
      updatedtasks[key] = updatedtasks[key].filter((t) => t.id !== taskid);
    });
    const updatedTask = { ...editingTask, status: newStatus };
    updatedtasks[activeTab].push(updatedTask);
    setTasks(updatedtasks);
    setEditingTask(null);
  };

  const filteredTasks = (status) => {
    return tasks[activeTab]?.filter((task) => task.status === status) || [];
  };

  useEffect(() => {
    saveActiveTab(activeTab);
  }, [activeTab]);
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <div className="app">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <AddTask activeTab={activeTab} tasks={tasks} setTasks={setTasks} />
      <div className="columns">
        <TaskColumn
          title="Todo"
          tasks={filteredTasks("todo")}
          onTaskClick={handleTaskClick}
          backgroundColor="#59B4D1"
        />
        <TaskColumn
          title="In Progress"
          tasks={filteredTasks("in-progress")}
          onTaskClick={handleTaskClick}
          backgroundColor="#D0935A"
        />
        <TaskColumn
          title="Done"
          tasks={filteredTasks("done")}
          onTaskClick={handleTaskClick}
          backgroundColor="#59D090"
        />
      </div>
      {editingTask && (
        <div className="popup">
          <select
            value={editingTask.status}
            onChange={(e) => handleStatusChange(editingTask.id, e.target.value)}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button onClick={() => setEditingTask(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
