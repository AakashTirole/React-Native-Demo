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

const Profile = (props)  => { 
  const navigator = props.navigation;
  const saveProfile = () =>{
    navigator.navigate('Home')
  }

  return (
    <SafeAreaView>
      {/* Navbar */}
      <View style={[styles.navBar, {flexDirection:'row', justifyContent:'center', alignItems:'center'}]}>
        <Text style={{padding: 15}}>
          <Icon name="chevron-back-outline" size={32} color="#fff" />
        </Text>
        <Text style={{fontSize:20, fontWeight:'600', color:'#fff', flex:1}}>Profile</Text>
        {/* <Text style={{padding:15}}>
          <Icon name="basket-outline" size={35} color="#fff" />
        </Text> */}
      </View>

      <ScrollView style={{backgroundColor:'#fff'}} contentInsetAdjustmentBehavior="automatic">
        {/* container */}
        <View style={[styles.container, {paddingBottom:150}]}>
          <View style={{marginTop:20, marginBottom:30, justifyContent:'center', alignItems:'center'}}>
            <View>
              <Image 
                style={{width: 150, height: 150, borderRadius:75, borderWidth:3, borderColor:'#006bff'}}
                source={require('../assets/images/profile.jpg')}
                resizeMode="cover"
              />
              <View style={{position:'absolute', right:5, bottom:0, backgroundColor:'#006bff', padding:8, borderRadius:30, borderWidth:5, borderColor:'#fff'}}>
                <Icon name="pencil-sharp" size={20} color="#fff" />
              </View>
            </View>
            <View style={{ justifyContent:'center', alignItems:'center', marginTop:20}}>
              <Text style={[styles.h1]}>Aakash Tirole</Text>
              <Text style={{fontSize:18, fontWeight:'600', color:'#8a9097'}}>aakash.tirole@innogent.in</Text>
            </View>
          </View>

          <View style={{padding:20}}>

            <View style={{marginBottom: 20}}>
              <TextInput style={[styles.inputStyle]} value='Aakash Tirole' placeholder='Name' />
            </View>
            <View style={{marginBottom: 20}}>
              <TextInput style={[styles.inputStyle]} value='aakash.tirole@innogent.in' placeholder='Email' />
            </View>
            <View style={{marginBottom: 20}}>
              <TextInput style={[styles.inputStyle]} value='9098605253' placeholder='Number' />
            </View>
            <View>
              <Text style={styles.fogtPass}>Chnage Password?</Text>
            </View>

            <View style={{marginTop: 80}}>
              <TouchableOpacity onPress={saveProfile}>
                  <Text style={[styles.buttonStyle]}>Save</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBar:{
    backgroundColor:'#006bff'
  },
  h1:{
    fontSize: 28,
    fontWeight:'700',
    color:'#000',
  },
  container:{
    padding: 15,
    backgroundColor:'#fff'
  },
  
  inputStyle :{
    width:'100%',
    // height:45,
    fontSize: 16,
    fontWeight:'500',
    color:'#000',
    borderBottomWidth: 1,
    borderColor: '#8a9097',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft:0,
    paddingRight:0
    
  },
  fogtPass:{
    color:'#006bff',
    fontSize: 17,
    fontWeight:'600',
    textDecorationLine:'underline'
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
  }
});

export default Profile;
