export const loadTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : { personal: [], professional: [] };
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const loadActiveTab = () => {
  return localStorage.getItem("activeTab") || "professional";
};

export const saveActiveTab = (tab) => {
  localStorage.setItem("activeTab", tab);
};
