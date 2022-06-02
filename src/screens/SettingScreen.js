import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default SettingScreen = ({ navigation }) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Settings</Text>
      <TouchableOpacity style={{marginTop: 20}} onPress={()=>{navigation.goBack()}}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  )
}