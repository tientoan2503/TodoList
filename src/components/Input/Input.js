import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../constant/colors';
import {colorSelector} from '../../redux/selectors';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colorSlice from '../../redux/colorSlice';
import DatePicker from 'react-native-date-picker';

export default InputTask = ({onAddTask}) => {
  const [task, setTask] = useState('');
  const color = useSelector(colorSelector);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddTask = date => {
    if (task) {
      setShowDatePicker(false);
      onAddTask({
        key: new Date().toLocaleString(),
        dateTime: formatDate(date),
        content: task,
        isDone: false,
      });
      setTask('');
      Keyboard.dismiss();
    }
  };

  const formatDate = d => {
    const dformat =
      [d.getHours(), d.getMinutes()].join(':') +
      ' - ' +
      [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/');
    return dformat;
  };

  const handleShowDatePicker = () => {
    if (task) {
      setShowDatePicker(true);
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
      <TouchableOpacity onPress={handleShowDatePicker} activeOpacity={0.6}>
        <IconAntDesign
          name="pluscircle"
          size={32}
          color={color}
          style={{paddingStart: 16}}
        />
      </TouchableOpacity>
      <DatePicker
        title={'Remind me at'}
        modal
        open={showDatePicker}
        date={new Date()}
        mode="datetime"
        onConfirm={date => {
          handleAddTask(date);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </View>
  );
};
