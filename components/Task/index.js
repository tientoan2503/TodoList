import React from 'react';
import {View, Text} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './style';

const Task = (props) => {
  return (
    <View style={styles.todoItem}>
      <BouncyCheckbox style={styles.checkbox} onPress={() => {}} />
      <Text style={styles.textContent}>{props.content}</Text>
      <IconAntDesign name="closecircle" size={18} style={styles.iconRemove} />
    </View>
  );
};

export default Task;
