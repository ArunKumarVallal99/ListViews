import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

const yourApp= () => {
  const [people, setPeople] = useState([
    {name:'Astro', id:'1'},
    {name:'James', id:'2'},
    {name:'Noel', id:'3'},
    {name:'Owen', id:'4'},
  ]);
  
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
        <Text style={styles.text}>{item.name}</Text>
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:40,
    padding:20,
  },
  text:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
  },
});

export default yourApp;
