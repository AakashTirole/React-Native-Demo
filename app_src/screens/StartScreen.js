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



const SignIn = (props)  => { 
  const navigator = props.navigation;
  const handleOnLogin = () => {
    navigator.navigate('SignIn')
  }
  const handleOnSignUn = () => {
    navigator.navigate('SignUp')
  }
  return (
    <SafeAreaView>
          <View style={[styles.mainContainer]}>
            <ImageBackground 
              style={{width: '100%', height: '100%', backgroundColor:'#fff'}}
              source={require('../assets/images/splash.png')}
              resizeMode="cover" >
            </ImageBackground>
          </View>
          
          <View style={{padding:20, width:'100%', position:'absolute', bottom:50}}>
            <View>
              <Text style={{color:'#fff', fontSize:28, fontWeight:'600', marginBottom:5}}>Demo App</Text>
              <Text style={{color:'#fff', fontSize:16}}>Hey this is a demo app which are developed on react native.</Text>
            </View>
            <View style={{marginTop: 40}}>
              <View style={{marginBottom: 15}}>
                <TouchableOpacity onPress={handleOnLogin}>
                    <View style={[styles.buttonStyle, {backgroundColor: '#fff'}]}>
                      <Text style={{color:'#006bff', fontWeight:'600', fontSize:18}}>Login</Text>
                    </View>
                </TouchableOpacity>
              </View>
              {/* <Button onPress={handleOnPress} style={styles.buttonStyle} color='#006bff'  title='Login' /> */}
              <TouchableOpacity onPress={handleOnSignUn}>
                  <View style={[styles.buttonStyle]}>
                   <Text style={{color:'#fff', fontWeight:'600', fontSize:18}}>Sign Up</Text>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 500,
    backgroundColor: '#006bff',
  },
  buttonStyle:{
    width:'100%',
    backgroundColor: '#006bff',
    height: 50,
    borderRadius: 6,
    borderWidth:1,
    borderColor:'#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});

export default SignIn;
