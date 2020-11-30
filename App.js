import React, { Component } from "react";
import { FlatList, Text, View,StyleSheet } from "react-native";


const Country = ({ item }) => (
    <Text style={styles.item}>{item.title}</Text>
);

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { data:[ {title:'Germany'}, 
            {title:"Australia"},
             {title:"Sri Lanka"},
             {title: "Japan"},
             {title: "Austria"},
             {title: "Spain"},
             {title: "America"},
             {title: "India"},
             {title: "France"},
             {title: "Belgium"},
             {title: "China"},
             {title: "Newzland"}]
             
        }; 
    }

    render() {
        return (
           
                <FlatList
                    data={this.state.data}
                    renderItem={Country}
                />
       
        );
    }
}

const styles=StyleSheet.create({
    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
});  
export default App;