import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import colors from '../../constant/colors';
import { colorSelector } from '../../redux/selectors';
import styles from './style';

export default InputTask = ({onAddTask}) => {
  const [task, setTask] = useState('');
  const color = useSelector(colorSelector)

  let btnColor
  if (color == 'blue') {
    btnColor = colors.blue
  } else if (color == 'pink') {
    btnColor = colors.pink
  } else if (color == 'orange') {
    btnColor = colors.orange
  }

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
          color={btnColor}
          style={{paddingStart: 16}}
        />
      </TouchableOpacity>
    </View>
  );
};
