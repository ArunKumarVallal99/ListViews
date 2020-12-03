import React from 'react';
import { View, Text, FlatList, StyleSheet,Image, ImageBackground, RefreshControl, SectionList } from 'react-native';

const teamA=[
  {id:1,name:"Sam Billings",imageUri:'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:2,name :"Sam Curran",imageUri:'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:3,name:"Maradona",imageUri:'https://reactnative.dev/img/tiny_logo.png'}
];
const teamB=[
  {id:1,name:"James Anderson",imageUri:'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:2,name :"Tom Latham",imageUri:'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:3,name:"Pedri",imageUri:'https://reactnative.dev/img/tiny_logo.png'}
];
const teamC=[
  {id:1,name:"Helen Eleven",imageUri:'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:2,name :"Annie Mariya",imageUri:'https://reactnative.dev/img/tiny_logo.png'}, 
  {id:3,name:"Drake Sheldon",imageUri:'https://reactnative.dev/img/tiny_logo.png'}
];
const DATA= [
  {
    title: "Team A",
    data:teamA
  },
  {
    title: "Team B",
    data:teamB
  },
  {
    title: "Team C",
    data:teamC
  },
  ];
  const sym='>';
  SectionListItems = ({ items }) => (
    <View style={styles.container}>
      <View style={styles.imageHolder}>
        <Image source={{uri:items.imageUri}} style={styles.imageContainer}/>
      </View>
      <View style={styles.textHolder}>
        <Text style={styles.text}>{items.name}</Text>
      </View>  
      <View style={styles.symbolContainer}>   
        <Text style={styles.symbol}>{sym}</Text>
      </View>
    </View>
  );
export default class App extends React.Component {
      
  render() {
    return (
      <View >
        <SectionList
          sections={DATA}
          renderItem={({item})=><SectionListItems items={item}/>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
         />
      </View>
    )
  }
}
const styles=StyleSheet.create({
  header:{
    paddingLeft:10,
    fontSize:14,
    paddingBottom:5,
    fontWeight:'bold',
  },
  container:{
    flexDirection:'row',
    backgroundColor:'#ffffff',
    margin:10,
    overflow: 'hidden',
    alignContent:'center',
    elevation:7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 100,
    shadowRadius: 10,
    borderRadius:5,
  },
  imageHolder:{
    alignContent:'center',
    justifyContent:'center',
    marginLeft:20,
  },
  imageContainer:{
    width:35,
    height:35,
    borderRadius:100,
    
  },
  textHolder:{
    paddingTop:20,
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:10,
    flexDirection:'row',
    width:170,
  },
  text:{
    fontSize:14,
  },
  symbolContainer:{
    marginLeft:110,
    justifyContent:'center',
    alignItems:'center',
  },
  symbol:{
    fontSize:28,
    color:'grey',
  },
  
});