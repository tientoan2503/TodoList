// /* initState la state ban dau khi reducer duoc khoi tao */
// const initState = {
//   taskList: [],
// };

// /* Reducer se nhan du lieu duoc gui tu dispatch,
//   o day no se dua vao loai action de xy ly state
//   */
// const rootReducer = (state = initState, action) => {
//   const taskListTemp = [...state.taskList];

//   switch (action.type) {
//     case 'taskList/addTask':
//       return {
//         ...state,
//         taskList: [...state.taskList, action.task],
//       };
//     case 'taskList/removeTask':
//       taskListTemp.find((task, index) => {
//         if (task.dateTime === action.task.dateTime) {
//           taskListTemp.splice(index, 1);
//           return true;
//         }
//       });

//       return {
//         ...state,
//         taskList: taskListTemp,
//       };
//     case 'taskList/doneTask':
//       const taskDone = action.task
//       taskListTemp.find((task, index) => {
//         if (task.dateTime === taskDone.dateTime) {
//           // remove task done in array
//           taskListTemp.splice(index, 1);
//           // set isDone for task
//           taskDone.isDone = !taskDone.isDone;
//           // if task is done, push task to bottom of array, else push it to beginning of array
//           if (taskDone.isDone) {
//             taskListTemp.push(taskDone);
//           } else {
//             taskListTemp.unshift(taskDone);
//           }
//           return true;
//         }
//       });

//       return {
//         ...state,
//         taskList: taskListTemp,
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

/* Use redux-toolkit */
import {createSlice} from '@reduxjs/toolkit';

export default rootReducer = createSlice({
  name: 'taskList',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.unshift(action.payload);
    },
    doneTask: (state, action) => {
      const taskDone = action.payload;
      state.taskList.find((task, index) => {
        if (task.dateTime === taskDone.dateTime) {
          // remove task done in array
          state.taskList.splice(index, 1);
          // set isDone for task
          task.isDone = !task.isDone;
          // if task is done, push task to bottom of array, else push it to beginning of array
          if (task.isDone) {
            state.taskList.push(task);
          } else {
            state.taskList.unshift(task);
          }
          return true;
        }
      });
    },
    removeTask: (state, action) => {
      state.taskList.find((task, index) => {
        if (task.dateTime === action.payload.dateTime) {
          state.taskList.splice(index, 1);
          return true;
        }
      });
    },
  },
});
