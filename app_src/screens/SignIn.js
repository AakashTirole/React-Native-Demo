import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = (props)  => { 
  const navigator = props.navigation;
  const login = () =>{
    navigator.navigate('Home')
    console.log("Login Successfully");
  }
  const signUp = () =>{
    navigator.navigate('SignUp')
  }

  /*****/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [emailError, setemailError] = useState('');

  const [accesToken, setAccessToken] = useState('');

  const signIn = async() => {
    // const result = await authApi.login(usernameOrEmail, password);

    if(email !='' && password !=''){
      await fetch('https://uat.onplanapp.com/api/auth/signin', {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-type':'application/json'
        },
        body: JSON.stringify({
          'usernameOrEmail':email,
          'password':password,
        })
      }).then(res => res.json())
      .then(resData => {
        console.log("resData", resData.body);   
        AsyncStorage.setItem('accessToken_Key', JSON.stringify(resData.body));
        AsyncStorage.setItem('userName', email);
        navigator.navigate('Welcome'); 
      })
      .catch(function(error){
        throw error;
      })
    }

    /*****/
    if(email !=''){
      // Alert.alert(email);
      setemailError('');
    }else{
      setemailError('Hey! Email should not be empty');
    }
    if(password !=''){
      // Alert.alert(password);
      setpasswordError('');
    }else{
      setpasswordError('Hey! Password should not be empty');
    }
  }
  
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:'#fff'}} contentInsetAdjustmentBehavior="automatic">
          <View style={[styles.headerContainer]}>
            <ImageBackground 
              style={{width: '100%', height: 500, backgroundColor:'#fff'}}
              source={require('../assets/images/bg1.png')}
              resizeMode="cover" >
              <View style={{padding: 20}}>
                <Text style={styles.headText}>Welcome</Text>
                <Text style={styles.headText}>Back...</Text>
              </View>
            </ImageBackground>
          </View>
          
          <View style={{padding:30, position:'relative', top:-130}}>

            <View style={{marginBottom: 20}}>
              <TextInput style={[styles.inputStyle]} placeholder='Email' 
                value={email}
                onChangeText={email => setEmail(email)}
                onChange={() => setemailError('')}/>
              <Text style={{color:'red', fontSize:14}}>{emailError}</Text>
            </View>
            <View style={{marginBottom: 20}}>
              {/* <TextInput style={[styles.inputStyle]} placeholder='Password' /> */}
              <TextInput style={[styles.inputStyle]} placeholder='Password' 
                value={password}
                onChangeText={password => setPassword(password)}
                onChange={() => setpasswordError('')}
                secureTextEntry={true}/>
              <Text style={{color:'red', fontSize:14}}>{passwordError}</Text>
            </View>
            <View>
              <Text style={styles.fogtPass}>Forgot Password?</Text>
            </View>

            <View style={{marginTop: 30}}>
              <TouchableOpacity  onPress={signIn}>
                  <Text style={[styles.buttonStyle]}>Login</Text>
              </TouchableOpacity>
              {/* <Button onPress={handleOnPress} style={styles.buttonStyle} color='#006bff'  title='Login' /> */}

              <View style={{marginTop: 35, marginBottom: 35, position:'relative', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{width:'100%', height:1, backgroundColor:'#c4c1c1'}}>ok</Text>
                <Text style={{fontSize:20, fontWeight: '600', textAlign:'center', width:40, backgroundColor:'#fff', position:'absolute', top:-15}}>or</Text>
              </View>

              <TouchableOpacity onPress={signUp}>
                  <Text style={[styles.buttonStyle2]}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    minHeight: 100,
    backgroundColor: 'red',
    position:'relative',
    top : '-15%',
  },
  headText:{
    fontSize: 32,
    fontWeight:'600',
    color:'#fff',
    position:'relative',
    top:  200,

  },
  inputStyle :{
    width:'100%',
    // height:45,
    fontSize: 16,
    fontWeight:'500',
    color:'#006bff',
    borderBottomWidth: 1,
    borderColor: '#006bff',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft:0,
    paddingRight:0
    
  },
  fogtPass:{
    color:'#006bff',
    fontSize: 17,
    fontWeight:'600',
    textAlign:'right'
  },
  buttonStyle:{
    width:'100%',
    textAlign:'center',
    backgroundColor: '#006bff',
    color: '#fff',
    height: 50,
    lineHeight:48,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 6
  },
  buttonStyle2:{
    width:'100%',
    textAlign:'center',
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#c4c1c1',
    color: '#969494',
    height: 50,
    lineHeight:48,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 6
  }
});

export default SignIn;
