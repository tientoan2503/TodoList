import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../Input/style';

export default InputTask = ({onAddTask}) => {
  const [task, setTask] = useState('');

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
          color="#f6c484"
          style={{paddingStart: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};
