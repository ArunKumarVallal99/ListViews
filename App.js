import React, { Component } from "react";
import {View,Text,Image, StyleSheet,Button,Alert, ScrollView,Picker, TextInput, TouchableOpacity,KeyboardAvoidingView} from "react-native";
//import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

class Registeration extends Component{
  state={
    firstNameValue:'',
    lastNameValue:'',
    dates:'12-1-2020',
    addressValue:'',
    accountType:'',
    country:'',
    emailValue:'',
    passwordValue:'',
    confirmPasswordValue:'',
    passwordVisible:true,
    confirmPasswordVisible:true,
    isEmailValid:false,
    isPasswordMatched:false  
  };

  validation=()=>{
      //console.log(this.state.isEmailValid)
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.state.firstNameValue.trim()){
        console.log("Missing FirstName")
        Alert.alert("Successfully Registered")
      }
      else if(!this.state.lastNameValue.trim()){
        console.log("Missing LastName")
        Alert.alert("Missing LastName")
      }
      else if(!this.state.addressValue.trim()){
        console.log("Missing addressName")
        Alert.alert("Missing addressName")
      }
      else if(!this.state.accountType.trim()){
        console.log("Missing account")
        Alert.alert("Missing account")
      }
      else if(!this.state.country.trim()){
        console.log("Missing country")
        Alert.alert("Missing country")
      }
      else if(!this.state.emailValue.trim()){
        console.log("Missing Email")
        Alert.alert("Missing Email")
      }
      else if(reg.test(this.state.emailValue)=== false){
        Alert.alert("Invalid Email ID")
      } 
      else if(!this.state.passwordValue.trim()){
        console.log("Missing Password")
        Alert.alert("Missing Password")
      }
      else if(!this.state.confirmPasswordValue.trim()){
        console.log("Missing Confirm Password")
        Alert.alert("Missing Confirm Password")
      }
      else if(this.state.passwordValue!=this.state.confirmPasswordValue){
        Alert.alert("Mismatched Passwords")
      }
      else {
        // if(reg.test(this.state.emailValue)=== true){
        //   this.setState({isEmailValid:true});
        //   console.log(this.state.isEmailValid)
        // }
        // else{
        //   this.setState({isEmailValid:false});
        // }
        // if(this.state.passwordValue!=this.state.confirmPasswordValue){

        //   this.setState({isPasswordMatched:false});
        // }
        // else{
        //   this.setState({isPasswordMatched:true}) ;
        // }
        //if(this.state.isEmailValid && this.state.isPasswordMatched )
          
        //else
          Alert.alert("Sucessfully Registred") 
      }
  }

  isVisblePassword=()=>{
    if(this.state.passwordVisible=== true){
      this.setState({passwordVisible:false})
    }
    else{
      this.setState({passwordVisible:true})
    }
  }
  isVisbleConfirmPassword=()=>{
    if(this.state.confirmPasswordVisible=== true){
      this.setState({confirmPasswordVisible:false})
    }
    else{
      this.setState({confirmPasswordVisible:true})
    }
  }
  render (){
  
    return(
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "padding" : "height"}
        style={styles.keyboardView}
        >
          <View style={styles.inputContainer}>

            <Text style={styles.name}>First Name</Text>
            <TextInput style={styles.nameTextInput}
            placeholder='FirstName'
            underlineColorAndroid='grey'
            autoFocus={false}
            onChangeText={(text)=>this.setState({firstNameValue:text})}
            />

            <Text style={styles.name}>Last Name</Text>
            <TextInput style={styles.nameTextInput}
            placeholder='LastName'
            underlineColorAndroid='grey'
            onChangeText={(text)=>this.setState({lastNameValue:text})}
            />

            <Text style={styles.dobText}>D.O.B</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={this.state.dates}
                mode="date" 
                placeholder="select date"
                format="DD-MMMM-YYYY"
                minDate="01-01-1900"
                maxDate="01-01-2030"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => { 
                      this.setState({dates:date});
                }}
                customStyles={{
                  dateInput: {
                    padding:10,
                    borderWidth:0,
                    borderRadius:8, 
                    backgroundColor:'white',
                    elevation:5,
                    shadowColor:'black',
                    shadowOffset:{width:0,height:10},
                    shadowOpacity:100, 
                  },
                  dateIcon:{
                    position:'relative',
                  },
                }}
              />
            <Text style={styles.addressText}>Address</Text>
            <TextInput
            style={styles.address}
            multiline={true}
            underlineColorAndroid='grey'
            dataDetectorTypes='address'
            placeholder='DoorNo, Street, City '
            onChangeText={(text)=>this.setState({addressValue:text})}/>

            <Text style={styles.accountTypeText}>Account Type</Text>
            <Picker
              selectedValue={this.state.accountType}
              style={styles.accountTypePicker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({accountType: itemValue})
              }>
              <Picker.Item label="Premium" value="premium" />
              <Picker.Item label="Platinum" value="platinum" />
              <Picker.Item label="Gold" value="gold" />
              <Picker.Item label="Normal" value="normal" />
            </Picker>
            
            <Text style={styles.countryText}>Country</Text>
            <Picker style={styles.countryPicker}
            selectedValue={this.state.country}
            onValueChange={(itemValue,itemIndex)=>
              this.setState({country:itemValue})}
            >
              <Picker.Item label='Austraila' value='austraila'/>
              <Picker.Item label='Canada' value='canada'/>
              <Picker.Item label='Belgium' value='belgium'/>
              <Picker.Item label='Austria' value='austria'/>
              <Picker.Item label='Brazil' value='brazil'/>
              <Picker.Item label='Colombia' value='colombia'/>
              <Picker.Item label='Italy' value='italy'/>
              <Picker.Item label='Hungary' value='hungary'/>
              <Picker.Item label='Argentina' value='argentina'/>
              <Picker.Item label='China' value='china'/>
              <Picker.Item label='Japan' value='japan'/>
              <Picker.Item label='Germany' value='germany'/>
              <Picker.Item label='France' value='france'/>
              <Picker.Item label='United Kingdom' value='unitedkingdom'/>
              <Picker.Item label='United States' value='unitedstates'/>
              <Picker.Item label='India' value='india'/>
              <Picker.Item label='Russia' value='russia'/>
              <Picker.Item label='Nepal' value='nepal'/>
              <Picker.Item label='Spain' value='spain'/>
              <Picker.Item label='Newzland' value='newzland'/>
              <Picker.Item label='South Africa' value='southafrica'/>
              <Picker.Item label='Srilanka' value='srilanka'/>
            </Picker>
            
            <Text style={styles.emailText}>Email Id</Text> 
            <TextInput style={styles.emailTextInput}
            placeholder='example@mail.com'
            underlineColorAndroid='grey'
            keyboardType='email-address'
            keyboardAppearance='dark'
            onChangeText={text=>this.setState({emailValue:text})}
            />
            
            <Text style={styles.passwordsText}>Password</Text> 
            <View style={styles.passwordView}>
              <TextInput style={styles.passwordTextInput}
              placeholder='ajg63Dveh5sdhQ'
              underlineColorAndroid='grey'
              keyboardAppearance='dark'
              secureTextEntry={this.state.passwordVisible}
              onChangeText={text=>this.setState({passwordValue: text})}
              /> 
              <Icon name={this.state.passwordVisible ?'eye-slash' : 'eye'} style={styles.iconStyle}
              onPress={this.isVisblePassword}
              borderRadius={0}
              color='grey'
              size= {15}
              />
            </View>

            <Text style={styles.confirmPasswordText}>Confirm Password</Text> 
            <View style={styles.confirmPasswordView} >
              <TextInput style={styles.confirmPasswordTextInput}
              placeholder='ajg63Dveh5sdhQ'
              underlineColorAndroid='grey'
              keyboardAppearance='dark'
              secureTextEntry={this.state.confirmPasswordVisible}
              onChangeText={text=>this.setState({confirmPasswordValue: text})}
              />  
              <Icon name={this.state.confirmPasswordVisible ?'eye-slash' : 'eye'} style={styles.iconStyle}
                onPress={this.isVisbleConfirmPassword}
                borderRadius={0}
                color='grey'
                size= {15}
                />
            </View>
            
            <TouchableOpacity style={styles.button}
            onPress={this.validation} >
              <Text>Submit</Text>
            </TouchableOpacity>
            
          </View> 
        </KeyboardAvoidingView>
      </ScrollView> 
      )
  }
}

const styles= StyleSheet.create({
  keyboardView:{
    flex:1,
    flexDirection:'column',
  },
  container:{
    padding:20,
  },
  inputContainer:{
    backgroundColor:'white',
    borderRadius:5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 100,
    shadowRadius: 2,
    elevation: 3,
    padding:20,
  },
  name:{
    marginBottom:10,
    fontSize:18,
  },
  nameTextInput:{
    marginBottom:10,
  },
  dobText:{
    marginBottom:10,
    fontSize:18,
  },
  datePickerStyle:{
    fontSize:20,
    width:200,
    marginBottom:15,
  },
  addressText:{
    fontSize:18,
  },
  address:{},
  accountTypeText:{
    fontSize:18,
  },
  accountTypePicker:{
     width: 150,
     marginBottom:8,
     borderBottomColor:'grey',
     borderBottomWidth:6,
  },
  countryText:{
    fontSize:18,
  },
  countryPicker:{
    width:178,
    marginBottom:8,
  },
  emailText:{
    fontSize:18,
    marginBottom:10,
  },
  emailTextInput:{
    marginBottom:10,
  },
  passwordView:{
    flexDirection:'row',
    overflow:'hidden',
    alignItems:'center',
  },
  passwordsText:{
    fontSize:18,
    marginBottom:10,
  },
  passwordTextInput:{
    marginBottom:10,
    marginRight:0,
    width:290,
  },
  iconStyle:{
    
  },
  confirmPasswordView:{
    flexDirection:'row',
    overflow:'hidden',
    alignItems:'center',
  },
  confirmPasswordText:{
    fontSize:18,
    marginBottom:10,
  },
  confirmPasswordTextInput:{
    marginBottom:10,
    width:290,
  },
  button:{
    fontSize:18,
    marginBottom:10,
    backgroundColor:'#4267B2',
    alignItems:'center',
    height:40,
    justifyContent:'center',
    width:80,
    marginLeft:110,
    borderRadius:20,
  },
});
export default Registeration;