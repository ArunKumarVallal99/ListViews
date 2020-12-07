import React, { Component } from "react";
import {View,Text,Image, StyleSheet,Button,Alert} from "react-native";
import { CustomPicker } from 'react-native-custom-picker'

class ImagesPicker extends Component{
render (){
  const options = ['One', 'Two', 'Three', 'Four', 'Five'] 
  return(

      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <CustomPicker
        options={options}
        onValueChange={value => {
          Alert.alert('Selected Item', value || 'No item were selected!')
        }}/>
    </View>
    
  )
}
}

const styles= StyleSheet.create({
  container:{
padding:80,
  },
});
export default ImagesPicker;