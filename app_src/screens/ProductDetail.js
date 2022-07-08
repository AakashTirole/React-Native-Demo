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

const ProductDetail = (props)  => { 
  const navigator = props.navigation;
  const addToCart = () =>{
    navigator.navigate('Cart')
  }
  const successful = () =>{
    navigator.navigate('Successful')
  }

  return (
    <SafeAreaView>
      {/* Navbar */}
      <View style={[styles.navBar, {flexDirection:'row', justifyContent:'center', alignItems:'center'}]}>
        <Text style={{padding: 15}}>
          <Icon name="chevron-back-outline" size={32} color="#fff" />
        </Text>
        <Text style={{fontSize:20, fontWeight:'600', color:'#fff', flex:1}}>Product Details</Text>
        <Text style={{padding:15}}>
          <Icon name="basket-outline" size={35} color="#fff" />
        </Text>
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{marginTop:0}}>
          <Image
            style={{width: '100%', height: 450, borderBottomLeftRadius:30, borderBottomRightRadius:30}}
            source={require('../assets/images/03.jpg')}
            resizeMode="cover"
          />
        </View>
        {/* container */}
        <View style={[styles.container, {paddingBottom:100}]}>
          <View>
            <Icon style={{position:'absolute', right:15, top:0}} name="heart-outline" size={45} color="#ea4c89" />
            <Text style={{fontSize:26, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
            <Text style={{fontSize:20, fontWeight:'700', color:'#000'}}>$60.00</Text>
            <Text style={{fontSize:16, fontWeight:'600', color:'#000', marginTop:15, marginBottom:5}}>Description</Text>
            <Text style={{fontSize:16, fontWeight:'600', color:'#848181', marginBottom:5}}>Recently I made a concept for a this app. Minimalism and Simplicity, but Vibrance, was my aim in creation. Hope You like it! </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{padding:15, paddingBottom:20, flexDirection:'row', width:'100%', flex:1, position:'absolute', bottom:0, left:0, backgroundColor:'#fff'}}>
        <View style={{width:'50%', paddingRight:5}}>
          <TouchableOpacity onPress={addToCart}>
              <Text style={[styles.buttonStyle, {backgroundColor:'#fff', borderWidth:1, borderColor:'#006bff', color:'#006bff'}]}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'50%', paddingLeft:5}}>
          <TouchableOpacity onPress={successful}>
              <Text style={[styles.buttonStyle]}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBar:{
    backgroundColor:'#006bff',
    // borderBottomLeftRadius:20,
    // borderBottomRightRadius:20
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
  buttonStyle:{
    width:'100%',
    textAlign:'center',
    backgroundColor: '#006bff',
    color: '#fff',
    height: 50,
    lineHeight:48,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 30
  },
});

export default ProductDetail;
