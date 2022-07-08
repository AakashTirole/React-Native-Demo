import React from 'react';
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
import SignIn from './SignIn';
  

const SignUp = (props)  => { 
  const navigator = props.navigation;
  const signUp = () =>{
    Alert.alert("Sign Up Successfully! Please Login Now");
    navigator.navigate('SignIn')
  }
  const login = () =>{
    navigator.navigate('SignIn')
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
                <Text style={styles.headText}>Create</Text>
                <Text style={styles.headText}>Account</Text>
              </View>
            </ImageBackground>
          </View>
          
          <View style={{padding:30, position:'relative', top:-130}}>
            
            <View style={{marginBottom: 20}}>
              <TextInput style={[styles.inputStyle]} placeholder='Name' />
            </View>
            <View style={{marginBottom: 20}}>
              <TextInput style={[styles.inputStyle]} placeholder='Email' />
            </View>
            <View>
              <TextInput style={[styles.inputStyle]} placeholder='Password' />
            </View>

            <View style={{marginTop: 50}}>
              <TouchableOpacity>
                  <Text style={[styles.buttonStyle]} onPress={signUp}>Sign Up</Text>
              </TouchableOpacity>
              {/* <Button onPress={handleOnPress} style={styles.buttonStyle} color='#006bff'  title='Login' /> */}

              <View style={{marginTop: 35, marginBottom: 35, position:'relative', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <Text style={{width:'100%', height:1, backgroundColor:'#c4c1c1'}}>ok</Text>
                <Text style={{fontSize:20, fontWeight: '600', textAlign:'center', width:40, backgroundColor:'#fff', position:'absolute', top:-15}}>or</Text>
              </View>

              <TouchableOpacity>
                  <Text style={[styles.buttonStyle2]} onPress={login}>Sign In</Text>
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

export default SignUp;
