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
import AsyncStorage from '@react-native-async-storage/async-storage';

const pushDataToStorage = async (taskList) => {
  try {
    await AsyncStorage.setItem('taskList', JSON.stringify(taskList))
  } catch (e) {
    console.log(e)
  }
}

export default taskSlice = createSlice({
  name: 'taskList',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.unshift(action.payload);
      pushDataToStorage(state)
    },
    doneTask: (state, action) => {
      state.find((task, index) => {
        if (task.key === action.payload.key) {
          // remove task done in array
          state.splice(index, 1);
          // set isDone for task
          task.isDone = !task.isDone;
          // if task is done, push task to bottom of array, else push it to beginning of array
          if (task.isDone) {
            state.push(task);
          } else {
            state.unshift(task);
          }
          return true;
        }
      });
      pushDataToStorage(state)
    },
    removeTask: (state, action) => {
      state.find((task, index) => {
        if (task.key === action.payload.key) {
          state.splice(index, 1);
          return true;
        }
      });
      pushDataToStorage(state)
    },
    syncTask: (state, action) => {
      // if action.payload == null => state = initialState = []
      if (action.payload) {
        return state = action.payload
      } else {
        return state
      } 
    }
  },
});
