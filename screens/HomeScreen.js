import React, {useState} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import Task from '../components/Task';
import styles from '../App.styles';
import Input from '../components/Input';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default ({navigation}) => {
  const [taskList, setTaskList] = useState([]);

  // Add new task to list
  const handleAddTask = task => {
    setTaskList(prev => [task, ...prev]);
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
          const taskListTemp = [...taskList];
          console.log('remove', taskListTemp);
          taskListTemp.find((task, index) => {
            if (task.dateTime === taskRemoved.dateTime) {
              taskListTemp.splice(index, 1);
            }
          });
          setTaskList(taskListTemp);
        },
      },
    ]);
  };

  // Done task
  const handleDoneTask = taskDone => {
    const taskListTemp = [...taskList];

    taskListTemp.find((task, index) => {
      if (task.dateTime === taskDone.dateTime) {
        // remove task done in array
        taskListTemp.splice(index, 1);
        // set isDone for task
        task.isDone = !task.isDone;
        // if task is done, push task to bottom of array, else push it to beginning of array
        if (task.isDone) {
          taskListTemp.push(task);
        } else {
          taskListTemp.unshift(task);
        }
        console.log('done', taskListTemp);
      }
    });
    setTaskList(taskListTemp);
  };

  const renderItem = ({item}) => {
    console.log('item', item);
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
      <View style={styles.header}>
        <Text style={styles.textHeader}>Todo list</Text>
        <TouchableOpacity
          style={{backgroundColor: 'transparent'}}
          onPress={() => {navigation.navigate('Setting')}}>
          <IconAntDesign name="setting" size={28} style={styles.btnSetting} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.dateTime}
      />
      <Input onAddTask={handleAddTask} />
    </View>
  );
};
