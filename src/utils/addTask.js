
export const addTask = (value, setTaskList, setValueInput, setError, taskList) => {
  if (value) {
      setError(false);
      setTaskList([...taskList, { id: Date.now(), name: value, completed: false }]);
      setValueInput('');
  } else {
      setError(true);
  }
};
