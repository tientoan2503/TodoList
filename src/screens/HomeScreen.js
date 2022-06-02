import React from 'react';
import {View, Alert, FlatList} from 'react-native';
import Task from '../components/Task/Task';
import styles from '../App.styles';
import Input from '../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, doneTask, removeTask} from '../redux/actions';
import {taskListSelector} from '../redux/selectors';

export default ({navigation}) => {
  // const [taskList, setTaskList] = useState([]);
  const taskList = useSelector(taskListSelector);

  const dispatch = useDispatch();

  // Add new task to list
  const handleAddTask = task => {
    dispatch(addTask(task));
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
          dispatch(removeTask(taskRemoved));
        },
      },
    ]);
  };

  // Done task
  const handleDoneTask = taskDone => {
    dispatch(doneTask(taskDone));
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
