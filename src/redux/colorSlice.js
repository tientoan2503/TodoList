import {createSlice} from '@reduxjs/toolkit';

export default colorSlice = createSlice({
  name: 'color',
  initialState: {
    color: 'orange'
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    }
  }
});
