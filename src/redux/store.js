/* Use redux core */

// import { createStore } from "redux";
// import rootReducer from "./reducer";

// export default store = createStore(rootReducer)

/* Use redux-toolkit */
import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice";
import taskSlice from "./taskSlice";

export default store = configureStore({
  reducer: {
    taskList: taskSlice.reducer,
    color: colorSlice.reducer
  }
})