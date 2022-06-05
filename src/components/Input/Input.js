import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../constant/colors';
import { colorSelector } from '../../redux/selectors';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colorSlice from '../../redux/colorSlice';

export default InputTask = ({onAddTask}) => {
  const [task, setTask] = useState('');
  const color = useSelector(colorSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    AsyncStorage.getItem('color').then(value => {
      dispatch(colorSlice.actions.changeColor(value))
    })
  }, [])
  const handleAddTask = () => {
    if (task) {
      onAddTask({
        dateTime: new Date().toLocaleString(),
        content: task,
        isDone: false,
      });
      setTask('');
      Keyboard.dismiss();
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="I wanna to ..."
        style={styles.input}
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask} activeOpacity={0.6}>
        <IconAntDesign
          name="pluscircle"
          size={32}
          color={color}
          style={{paddingStart: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};
