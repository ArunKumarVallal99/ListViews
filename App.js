import React, { Component } from "react";
import {View,Text,Picker, StyleSheet,} from "react-native";
class SimplePicker extends Component{
state={
  languages:'english'
}

render (){
  return(
    <View style={styles.container}>
      <Picker style={styles.pickerElement}
      selectedValue={this.state.languages}
      onValueChange={(itemValue,itemIndex)=>this.setState({languages:itemValue})}
      mode='dropdown'
      > 
        <Picker.Item label='English' value='english'/>
        <Picker.Item label='Tamil' value='tamil'/>
        <Picker.Item label='Spanish' value='spanish'/>
        <Picker.Item label='French' value='french'/>
        <Picker.Item label='Arabic' value='arabic'/>
        <Picker.Item label='Hindi' value='hindi'/>
        <Picker.Item label='Thamizhi' value='tamizhi'/>
      </Picker>
    </View>
  )
}
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',


  },
  pickerElement:{
    width:150,
    borderColor:'black',
    borderWidth:2,
    height:40,
  },

});
export default SimplePicker;