import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textContent: {
    fontSize: 16,
  },
  iconRemove: {
    opacity: 0.5,
    padding: 6,
    alignItems: 'center',
    justifyContents: 'center',
  },
  textDate: {
    fontSize: 12,
  },
  wrapperContent: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default styles;
