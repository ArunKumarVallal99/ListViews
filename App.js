import React from 'react';
import {Alert, FlatList,StyleSheet,Text,View} from 'react-native';
import { Component } from 'react';
const itemSeparatorView = () => {
  return (
    //Item Separator
    <View
      style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
    />
  );
};
const getItem = (item) => {
  //Function for click on an item
  alert('Id : ' + item.id + ' Name : ' + item.name);
};
class YourApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      FlatListItems: [
        {name:'Arun',id:'1'},
        {name:'Shyam',id:'2'},
        {name:'Einsten',id:'3'},
        {name:'Helen',id:'4'},
        {name:'FlatList',id:'5'},
        {name:'sample',id:'6'}
      ],
    };
  }
  
  render() {
    return (
      <FlatList
        style={styles.flatLsit}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={itemSeparatorView}
        data={this.state.FlatListItems}
        renderItem={({item})=>(
          <View style={styles.dataView}>
            <Text style={styles.textInView} onPress={getItem(item)}> at{item.name}</Text>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  flatLsit:{
    marginTop:40,
  },
  dataView:{
    justifyContent:'center',
    marginBottom:10,
  },
  textInView:{
    backgroundColor:'blue',
    color:'white',
    padding:10,
  },
});

export default YourApp;