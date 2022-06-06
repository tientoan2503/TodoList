import React from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './style';
import { useSelector } from 'react-redux';
import { colorSelector } from '../../redux/selectors';

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

  const formatDate = date => {
    const d = new Date(date)
    const dformat =
      [d.getHours(), d.getMinutes()].join(':') +
      ' - ' +
      [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/');
    return dformat;
  };

  return (
    <View style={styles.todoItem}>
      <BouncyCheckbox onPress={onDoneTask} isChecked={task.isDone} fillColor={color}/>
      <View style={styles.wrapperContent}>
        <Text style={contentTextStyle}>{task.content}</Text>
        <Text style={dateTextStyle}>{formatDate(task.dateTime)}</Text>
      </View>
      <View style={styles.iconRemove} onStartShouldSetResponder={onRemoveTask}>
        <IconAntDesign name="closecircle" size={18} />
      </View>
    </View>
  );
};

export default Task;
