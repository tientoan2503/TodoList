import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {colorSelector} from '../../redux/selectors';
import styles from './style';
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification'
import { CHANNEL_ID } from '../../constant/notification';

export default InputTask = ({onAddTask}) => {
  const [task, setTask] = useState('');
  const color = useSelector(colorSelector);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddTask = date => {
    if (task) {
      setShowDatePicker(false);
      const t = {
        key: new Date().toLocaleString(),
        dateTime: date.toLocaleString(),
        content: task,
        isDone: false,
      }
      onAddTask(t);

      pushNotification(t)

      setTask('');
      Keyboard.dismiss();
    }
  };

  const pushNotification = (task) => {
    PushNotification.localNotificationSchedule({
      channelId: CHANNEL_ID,
      title: 'Việc này hoàn thành chưa cu ơi?',
      message: task.content,
      date: new Date(task.dateTime),
      allowWhileIdle: true,
    })
  }

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
        minimumDate={new Date(Date.now() + 1000)}
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
