import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="tabs">
      <div
        className={activeTab === "professional" ? "active" : ""}
        onClick={() => handleTabClick("professional")}
      >
        <p className="tab-text">Professional</p>
      </div>
      <div
        className={activeTab === "personal" ? "active" : ""}
        onClick={() => handleTabClick("personal")}
      >
        <p className="tab-text">Personal</p>
      </div>
    </div>
  );
};

export default Tabs;
