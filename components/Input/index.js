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

export default InputTask = props => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      props.onAddTask({content: task, isDone: false});
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
      <TouchableOpacity onPress={handleAddTask}>
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
