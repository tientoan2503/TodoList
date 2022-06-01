import React from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './style';

const Task = ({task, onRemoveTask, onDoneTask}) => {
  let textStyle = task.isDone
    ? {
        ...styles.textContent,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
      }
    : styles.textContent;

  return (
    <View style={styles.todoItem}>
      <BouncyCheckbox onPress={onDoneTask} isChecked={task.isDone} />
      <Text style={textStyle}>{task.content}</Text>
      <View style={styles.iconRemove} onStartShouldSetResponder={onRemoveTask}>
        <IconAntDesign name="closecircle" size={18} />
      </View>
    </View>
  );
};

export default Task;
