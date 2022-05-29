import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Task from './components/Task';
import styles from './App.styles';
import Input from './components/Input';

export default () => {
  const [taskList, setTaskList] = useState([]);

  // Add new task to list
  const handleAddTask = task => {
    setTaskList([...taskList, task]);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Todo list</Text>
      </View>

      <ScrollView style={styles.container}>
        {taskList.map((task, item) => {
          return <Task content={task} key={item} />;
        })}
      </ScrollView>

      <Input onAddTask={handleAddTask} />
    </View>
  );
};
