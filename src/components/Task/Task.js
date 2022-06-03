import React from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './style';
import { useSelector } from 'react-redux';
import { colorSelector } from '../../redux/selectors';
import colors from '../../constant/colors';

const Task = ({task, onRemoveTask, onDoneTask}) => {
  const color = useSelector(colorSelector)

  let fillColor
  if (color == 'blue') {
    fillColor = colors.blue
  } else if (color == 'pink') {
    fillColor = colors.pink
  } else if (color == 'orange') {
    fillColor = colors.orange
  }

  let textStyle = task.isDone
    ? {
        ...styles.textContent,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
      }
    : styles.textContent;

  return (
    <View style={styles.todoItem}>
      <BouncyCheckbox onPress={onDoneTask} isChecked={task.isDone} fillColor={fillColor}/>
      <Text style={textStyle}>{task.content}</Text>
      <View style={styles.iconRemove} onStartShouldSetResponder={onRemoveTask}>
        <IconAntDesign name="closecircle" size={18} />
      </View>
    </View>
  );
};

export default Task;
