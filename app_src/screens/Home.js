import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
// import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props)  => { 
  const navigator = props.navigation;
  const productDetails = () =>{
    navigator.navigate('ProductDetail')
  }
  const profile = () =>{
    navigator.navigate('Profile')
  }
  const listing = () =>{
    navigator.navigate('Listing')
  }

  return (
    <SafeAreaView>
      {/* Navbar */}
      <View style={[styles.navBar, {flexDirection:'row', justifyContent:'center', alignItems:'center'}]}>
        <Text style={{padding: 15,}} onPress={profile}>
          {/* <FontAwesome5 style={{fontSize:29, color:'#000'}} name={'user'} /> */}
          <Icon name="person-outline" size={34} color="#fff" />
        </Text>
        <Text style={{fontSize:20, fontWeight:'600', color:'#fff', flex:1, textAlign:'center'}}>Home</Text>
        <Text style={{padding:15}} onPress={listing}>
          {/* <FontAwesome5 style={{fontSize:26, color:'#000'}} name={'add-shopping-cart'} light /> */}
          <Icon name="basket-outline" size={35} color="#fff" />
        </Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{paddingBottom:150}}>
          {/* container */}
          <View style={[styles.container]}>
            {/* Heading */}
            <View style={{marginTop:5, marginBottom:15}}>
              <Text style={[styles.h1]}>Collections</Text>
            </View>

            {/* scrollable list */}
            <View style={{flexDirection:'row'}}>
              <ScrollView horizontal={true}>
                <View style={{width:80, marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:40, width: 80, height: 80}}
                      source={require('../assets/images/01.jpg')}
                      resizeMode="cover"
                    />
                    <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#000', marginTop:5}}>Men</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:80, marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:40, width: 80, height: 80}}
                      source={require('../assets/images/02.jpg')}
                      resizeMode="cover"
                    />
                    <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#000', marginTop:5}}>Women</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:80, marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:40, width: 80, height: 80}}
                      source={require('../assets/images/03.jpg')}
                      resizeMode="cover"
                    />
                    <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#000', marginTop:5}}>Kids</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:80, marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:40, width: 80, height: 80}}
                      source={require('../assets/images/01.jpg')}
                      resizeMode="cover"
                    />
                    <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#000', marginTop:5}}>Men</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:80, marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:40, width: 80, height: 80}}
                      source={require('../assets/images/02.jpg')}
                      resizeMode="cover"
                    />
                    <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#000', marginTop:5}}>Women</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:80, marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:40, width: 80, height: 80}}
                      source={require('../assets/images/03.jpg')}
                      resizeMode="cover"
                    />
                    <Text style={{textAlign:'center', fontSize:16, fontWeight:'600', color:'#000', marginTop:5}}>Kids</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            {/* scrollable list END*/}
          </View>

          <View style={{backgroundColor:'#efefef', padding:15}}>
            {/* Heading */}
            <View style={{marginTop:0, marginBottom:15}}>
              <Text style={[styles.h1]}>New In</Text>
            </View>

            {/* Prodct scrollable list */}
            <View style={{flexDirection:'row'}}>
              <ScrollView horizontal={true}>
                <View style={{marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:20, width: 220, height: 280}}
                      source={require('../assets/images/01.jpg')}
                      resizeMode="cover"
                    />
                    <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                    <View style={{marginTop:5}}>
                      <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$60.00</Text>
                      <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:20, width: 220, height: 280}}
                      source={require('../assets/images/02.jpg')}
                      resizeMode="cover"
                    />
                    <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                    <View style={{marginTop:5}}>
                      <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$46.32</Text>
                      <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Bledger</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:20, width: 220, height: 280}}
                      source={require('../assets/images/03.jpg')}
                      resizeMode="cover"
                    />
                    <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                    <View style={{marginTop:5}}>
                      <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$80.50</Text>
                      <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Dark Green Shirt</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{marginRight:15}}>
                  <TouchableOpacity onPress={productDetails}>
                    <Image
                      style={{borderRadius:20, width: 220, height: 280}}
                      source={require('../assets/images/02.jpg')}
                      resizeMode="cover"
                    />
                    <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                    <View style={{marginTop:5}}>
                      <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$46.32</Text>
                      <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Bledger</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            {/* scrollable list END*/}
          </View>

          <View style={[styles.container]}>
            {/* Heading */}
            <View style={{marginTop:30, marginBottom:15}}>
              <Text style={[styles.h1]}>Top Brand</Text>
            </View>

            {/* products */}
            <View style={{flex:1, flexDirection:'row', marginBottom:20}} >
              <View style={{width:'50%', paddingRight:8}}>
                <TouchableOpacity onPress={productDetails}>
                  <Image
                    style={{borderRadius:20, width: '100%', height: 280}}
                    source={require('../assets/images/01.jpg')}
                    resizeMode="cover"
                  />
                  <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                  <View style={{marginTop:5}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#000'}} >$60.00</Text>
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width:'50%', paddingLeft:8}}>
                <TouchableOpacity onPress={productDetails}>
                  <Image
                    style={{borderRadius:20, width: '100%', height: 280}}
                    source={require('../assets/images/02.jpg')}
                    resizeMode="cover"
                  />
                  <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                  <View style={{marginTop:5}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$46.32</Text>
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Bledger</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex:1, flexDirection:'row', marginBottom:20}}>
              <View style={{width:'50%', paddingRight:8}}>
                <TouchableOpacity onPress={productDetails}>
                  <Image
                    style={{borderRadius:20, width: '100%', height: 280}}
                    source={require('../assets/images/03.jpg')}
                    resizeMode="cover"
                  />
                  <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                  <View style={{marginTop:5}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$60.00</Text>
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width:'50%', paddingLeft:8}}>
                <TouchableOpacity onPress={productDetails}>
                  <Image
                    style={{borderRadius:20, width: '100%', height: 280}}
                    source={require('../assets/images/01.jpg')}
                    resizeMode="cover"
                  />
                  <Icon style={{position:'absolute', right:10, top:10}} name="heart-outline" size={38} color="#ea4c89" />
                  <View style={{marginTop:5}}>
                    <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$46.32</Text>
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000'}}>Bledger</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* products END*/}

          </View>  
        </View>      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBar:{
    backgroundColor:'#006bff',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  h1:{
    fontSize: 26,
    fontWeight:'700',
    color:'#000',
  },
  container:{
    padding: 15,
    backgroundColor:'#fff'
  },
});

export default Home;
