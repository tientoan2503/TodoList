import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginEnd: 20
  },
  textHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  container: {
    flex: 1,
  },
  btnSetting: {
    color: 'black'
  }
});
