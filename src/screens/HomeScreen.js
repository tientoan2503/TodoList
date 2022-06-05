import React, { useEffect } from 'react';
import {View, Alert, FlatList} from 'react-native';
import Task from '../components/Task/Task';
import styles from '../App.styles';
import Input from '../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {taskListSelector} from '../redux/selectors';
import  taskSlice  from '../redux/taskSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {

  const taskList = useSelector(taskListSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('taskList').then(value => {
      dispatch(taskSlice.actions.syncTask(JSON.parse(value)))
    })
  }, [])

  // Add new task to list
  const handleAddTask = task => {
    dispatch(taskSlice.actions.addTask(task));
  };

  // Remove task
  const handleRemoveTask = taskRemoved => {
    Alert.alert('Confirm', 'Are you sure to remove it?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(taskSlice.actions.removeTask(taskRemoved));
        },
      },
    ]);
  };

  // Done task
  const handleDoneTask = taskDone => {
    dispatch(taskSlice.actions.doneTask(taskDone));
  };

  const renderItem = ({item}) => {
    return (
      <Task
        task={item}
        onRemoveTask={() => handleRemoveTask(item)}
        onDoneTask={() => handleDoneTask(item)}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        extraData={taskList}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.dateTime}
      />
      <Input onAddTask={handleAddTask} />
    </View>
  );
};
