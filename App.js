import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import Task from './components/Task';
import styles from './App.styles';
import Input from './components/Input';

export default () => {
  const [taskList, setTaskList] = useState([]);

  // Add new task to list
  const handleAddTask = task => {
    setTaskList([...taskList, task]);
  };

  // Remove task
  const handleRemoveTask = taskIndex => {
    Alert.alert('Confirm', 'Are you sure to remove it?', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(taskIndex, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };

  // Done task
  const handleDoneTask = taskIndex => {
    let taskListTmp = [...taskList];
    const task = taskList[taskIndex];
    task.isDone = !task.isDone;
    taskListTmp[taskIndex] = task;
    setTaskList(taskListTmp);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Todo list</Text>
      </View>

      <ScrollView style={styles.container}>
        {taskList.map((task, index) => {
          return (
            <Task
              task={task}
              key={index}
              onRemoveTask={() => handleRemoveTask(index)}
              onDoneTask={() => handleDoneTask(index)}
            />
          );
        })}
      </ScrollView>

      <Input onAddTask={handleAddTask} />
    </View>
  );
};
