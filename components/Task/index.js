import React from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './style';

const Task = props => {
  let textStyle = props.task.isDone
    ? {
        ...styles.textContent,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
      }
    : styles.textContent;

  return (
    <View style={styles.todoItem}>
      <BouncyCheckbox onPress={props.onDoneTask} isChecked={props.task.isDone} />

      <Text style={textStyle}>{props.task.content}</Text>
      
      <View style={styles.iconRemove} onStartShouldSetResponder={props.onRemoveTask}>
        <IconAntDesign name="closecircle" size={18} />
      </View>
    </View>
  );
};

export default Task;
