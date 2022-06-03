import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default SettingScreen = ({navigation}) => {
  const [color, setColor] = useState('orange');

  const selectColor = (color) => {
    setColor(color)
  }

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
                color == 'orange'
                  ? {...styles.colorOrange, ...styles.colorSelected}
                  : styles.colorOrange
              }
              onStartShouldSetResponder={() => selectColor('orange')}
            />
            <View
              style={
                color == 'blue'
                  ? {...styles.colorBlue, ...styles.colorSelected}
                  : styles.colorBlue
              }
              onStartShouldSetResponder={() => selectColor('blue')}
            />
            <View
              style={
                color == 'pink'
                  ? {...styles.colorPink, ...styles.colorSelected}
                  : styles.colorPink
              }
              onStartShouldSetResponder={() => selectColor('pink')}
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
    backgroundColor: '#0090dd',
  },
  colorOrange: {
    ...theme,
    backgroundColor: '#f6c484',
  },
  colorPink: {
    ...theme,
    backgroundColor: '#fcd1fe',
  },
  themeColor: {
    flexDirection: 'row',
  },
  colorSelected: {
    borderWidth: 2.5,
    borderColor: '#99ccff',
  },
});
