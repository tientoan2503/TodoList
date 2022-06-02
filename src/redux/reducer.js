/* initState la state ban dau khi reducer duoc khoi tao */
const initState = {
  taskList: [],
};

/* Reducer se nhan du lieu duoc gui tu dispatch, 
  o day no se dua vao loai action de xy ly state 
  */
const rootReducer = (state = initState, action) => {
  const taskListTemp = [...state.taskList];

  switch (action.type) {
    case 'taskList/addTask':
      return {
        ...state,
        taskList: [...state.taskList, action.task],
      };
    case 'taskList/removeTask':
      taskListTemp.find((task, index) => {
        if (task.dateTime === action.task.dateTime) {
          taskListTemp.splice(index, 1);
          return true;
        }
      });
      return {
        ...state,
        taskList: taskListTemp,
      };
    case 'taskList/doneTask':
      taskListTemp.find((task, index) => {
        if (task.dateTime === action.task.dateTime) {
          // remove task done in array
          taskListTemp.splice(index, 1);
          // set isDone for task
          action.task.isDone = !action.task.isDone;
          // if task is done, push task to bottom of array, else push it to beginning of array
          if (action.task.isDone) {
            taskListTemp.push(action.task);
          } else {
            taskListTemp.unshift(action.task);
          }
          return true;
        }
      });
      return {
        ...state,
        taskList: taskListTemp,
      };
    default:
      return state;
  }
};

export default rootReducer;
