import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textContent: {
    flex: 1,
    fontSize: 16,
  },
  iconRemove: {
    opacity: 0.5,
    padding: 6,
    alignItems: 'center',
    justifyContents: 'center',
  },
});

export default styles;
