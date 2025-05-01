
export const updateTask = (id, taskList, setTaskList) => {
  const newTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTaskList(newTaskList);
};
