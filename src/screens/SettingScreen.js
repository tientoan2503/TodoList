import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../constant/colors';
import colorSlice from '../redux/colorSlice';
import {colorSelector} from '../redux/selectors';

export default SettingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const color = useSelector(colorSelector);

  const selectColor = c => {
    dispatch(colorSlice.actions.changeColor(c));
  };
  console.log('color', color);
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textSetting}>Settings</Text>
      </View>

      <ScrollView style={styles.listPreferences}>
        <View style={styles.itemContainer}>
          <Text style={styles.textItem}>Font</Text>
        </View>

        <View style={styles.wrapperTheme}>
          <Text style={styles.textItem}>Theme color</Text>
          <View style={styles.themeColor}>
            <View
              style={
                color == colors.orange
                  ? {...styles.colorOrange, ...styles.colorSelected}
                  : styles.colorOrange
              }
              onStartShouldSetResponder={() => selectColor(colors.orange)}
            />
            <View
              style={
                color == colors.blue
                  ? {...styles.colorBlue, ...styles.colorSelected}
                  : styles.colorBlue
              }
              onStartShouldSetResponder={() => selectColor(colors.blue)}
            />
            <View
              style={
                color == colors.pink
                  ? {...styles.colorPink, ...styles.colorSelected}
                  : styles.colorPink
              }
              onStartShouldSetResponder={() => selectColor(colors.pink)}
            />
            <View />
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.textItem}>Notification</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const theme = {
  width: 24,
  height: 24,
  borderRadius: 12,
  marginHorizontal: 4,
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
  },
  header: {
    alignItems: 'center',
  },
  textSetting: {
    fontSize: 22,
    color: 'black',
  },
  textItem: {
    fontSize: 16,
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  wrapperTheme: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorBlue: {
    ...theme,
    backgroundColor: colors.blue,
  },
  colorOrange: {
    ...theme,
    backgroundColor: colors.orange,
  },
  colorPink: {
    ...theme,
    backgroundColor: colors.pink,
  },
  themeColor: {
    flexDirection: 'row',
  },
  colorSelected: {
    borderWidth: 2.5,
    borderColor: colors.selected,
  },
});
