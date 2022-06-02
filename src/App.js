import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import styles from './App.styles';
import store from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation, route}) => ({
              title: 'Todo List',
              headerRight: () => (
                <TouchableOpacity
                  style={{backgroundColor: 'transparent'}}
                  onPress={() => {
                    navigation.navigate('Setting');
                  }}>
                  <IconAntDesign
                    name="setting"
                    size={28}
                    style={styles.btnSetting}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
