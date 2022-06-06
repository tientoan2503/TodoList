import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../constant/colors';

const setColor = async (color) => {
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
  initialState: COLORS.orange,
  reducers: {
    changeColor: (state, action) => {
      setColor(action.payload)
      if (action.payload) {
        return state = action.payload;
      } else {
        return state
      }
    },
  },
});
