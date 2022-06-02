/* Use redux core */

// import { createStore } from "redux";
// import rootReducer from "./reducer";

// export default store = createStore(rootReducer)

/* Use redux-toolkit */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

export default store = configureStore({
  reducer: rootReducer.reducer
})