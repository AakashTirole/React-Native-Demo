import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity
} from 'react-native';

const Successful = (props)  => { 
  const navigator = props.navigation;
  const home = () =>{
    navigator.navigate('Home')
  }

  return (
    <SafeAreaView>
        <View style={[styles.container]}>
          <View>
            <Text style={[styles.h1]}>Payment Successfully Completed.</Text>
            <Text style={{fontSize:18, color:'#000', fontWeight:'400', textAlign:'center',}}>You will recieve a message for shipping details.</Text>
            <View style={{width:'100%', textAlign:'center', flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:80}}>
              <TouchableOpacity style={{width:200}}>
                  <Text style={[styles.buttonStyle]} onPress={home}>Back To Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h1:{
    fontSize: 28,
    fontWeight:'700',
    color:'#006bff',
    marginBottom:10,
    textAlign:'center',
  },
  container:{
    padding: 60,
    backgroundColor:'#fff',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  buttonStyle:{
    width:'100%',
    textAlign:'center',
    backgroundColor: '#006bff',
    color: '#fff',
    height: 55,
    lineHeight:48,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 30,
    maxWidth:200
  },
});

export default Successful;
