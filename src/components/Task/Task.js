import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './style';
import { useDispatch, useSelector } from 'react-redux';
import { colorSelector } from '../../redux/selectors';
import colors from '../../constant/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colorSlice from '../../redux/colorSlice';

const Task = ({task, onRemoveTask, onDoneTask}) => {
  const color = useSelector(colorSelector)

  let contentTextStyle = task.isDone
    ? {
        ...styles.textContent,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
      }
    : styles.textContent;

  let dateTextStyle = task.isDone
  ? {
      ...styles.textDate,
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
    }
  : styles.textDate;

  return (
    <View style={styles.todoItem}>
      <BouncyCheckbox onPress={onDoneTask} isChecked={task.isDone} fillColor={color}/>
      <View style={styles.wrapperContent}>
        <Text style={contentTextStyle}>{task.content}</Text>
        <Text style={dateTextStyle}>{task.dateTime}</Text>
      </View>
      <View style={styles.iconRemove} onStartShouldSetResponder={onRemoveTask}>
        <IconAntDesign name="closecircle" size={18} />
      </View>
    </View>
  );
};

export default Task;
