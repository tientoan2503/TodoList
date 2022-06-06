import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const changeColor = async (color) => {
  try {
    if (color) {
      await AsyncStorage.setItem('color', color)
    } else {
      await AsyncStorage.setItem('color', 'orange')
    }
  } catch (e) {
    console.log(e)
  }
}

export default colorSlice = createSlice({
  name: 'color',
  initialState: 'orange',
  reducers: {
    changeColor: (state, action) => {
      changeColor(action.payload)
      if (action.payload) {
        return state = action.payload;
      } else {
        return state
      }
    },
  },
});
