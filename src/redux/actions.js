/* 
  action chinh la 1 object
  se dinh nghia ra du lieu can xu ly khi dua vao reducer
*/

export const addTask = task => {
  return {
    type: 'taskList/addTask',
    task: task
  };
};

export const removeTask = task => {
  return {
    type: 'taskList/removeTask',
    task: task
  }
}

export const doneTask = task => {
  return {
    type: 'taskList/doneTask',
    task: task
  }
}
