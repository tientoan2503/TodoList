/* 
  Selector giup viec lay du lieu ra trong store,
  vd: store co state la {filter, todoList} => se can 2 selector chinh la filter va todoList
*/
export const taskListSelector = state => {
 return state.taskList;
};
export const colorSelector = state => state.color;
