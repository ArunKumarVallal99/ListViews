import React, { Component } from "react";
import {View,Text,Image, StyleSheet,Button,Alert} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker'
class ImagesPicker extends Component{
state={
  touched:false
}

onPressed=()=>{
  const options = {
    title: 'Choose a Image',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
      this.setState({
        imageSource: source,
      });
    }
  });
}
render (){
  return(
    <View style={styles.container}>
      <Button title ='Image' onPress={this.onPressed}/> 
      <Image source={this.state.imageSource} style={styles.uploadAvatar} />
    </View>
    
  )
  
}
}

const styles= StyleSheet.create({
  container:{
padding:80,
  },
uploadAvatar:{
  padding:20,
  margin:40,
  width:180,
  height:150,
  borderWidth:2,
  borderColor:'grey',
}
});
export default ImagesPicker;