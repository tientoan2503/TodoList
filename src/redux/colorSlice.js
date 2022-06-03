import {createSlice} from '@reduxjs/toolkit';

export default colorSlice = createSlice({
  name: 'color',
  initialState: 'orange',
  reducers: {
    changeColor: (state, action) => {
      return state = action.payload;
    },
  },
});
