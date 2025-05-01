
export const deleteTask = (id, taskList, setTaskList) => {
  const newTaskList = taskList.filter((task) => task.id !== id);
  setTaskList(newTaskList);
};
