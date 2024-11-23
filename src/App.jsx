import React, { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import { loadActiveTab, saveActiveTab } from "./utils/localStorage";

const App = () => {
  const [activeTab, setActiveTab] = useState(loadActiveTab());

  useEffect(() => {
    saveActiveTab(activeTab);
  }, [activeTab]);
  return (
    <div className="app">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
