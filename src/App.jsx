import React, { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import {
  loadActiveTab,
  loadTasks,
  saveActiveTab,
  saveTasks,
} from "./utils/localStorage";
import AddTask from "./components/AddTask";

const App = () => {
  const [activeTab, setActiveTab] = useState(loadActiveTab());
  const [tasks, setTasks] = useState(loadTasks());

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
    </div>
  );
};

export default App;
