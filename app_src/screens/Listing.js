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

const Listing = (props)  => { 
  const navigator = props.navigation;
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
        <Text style={{fontSize:20, fontWeight:'600', color:'#fff', flex:1}}>Cart</Text>
        {/* <Text style={{padding:15}}>
          <Icon name="basket-outline" size={35} color="#fff" />
        </Text> */}
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* container */}
        <View style={[styles.container, {paddingBottom:150}]}>
          {/* Single cart */}
          <View style={[styles.cartBox]}>
            <View style={{width: 70, height: 80, borderRadius:10}}>
              <Image
                style={{width: 70, height: 80, borderRadius:10}}
                source={require('../assets/images/03.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={{paddingLeft:10, paddingRight:10, flex:1}}>
              <Text style={{fontSize:18, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
              <Text style={{fontSize:15, fontWeight:'600', color:'#000', marginBottom:5}}>Size: M</Text>
              <Text style={{fontSize:18, fontWeight:'700', color:'#000'}}>$60.00</Text>
            </View>
            <View style={{backgroundColor:'#fff', borderRadius:50}}>
              <TouchableOpacity>
                <Text style={{padding:5}}><Icon name="add-outline" size={30} color="#000" /></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{padding:5}}><Icon name="remove-outline" size={30} color="#000" /></Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Single cart */}
          <View style={[styles.cartBox, {backgroundColor:'#f1eafa'}]}>
            <View style={{width: 70, height: 80, borderRadius:10}}>
              <Image
                style={{width: 70, height: 80, borderRadius:10}}
                source={require('../assets/images/01.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={{paddingLeft:10, paddingRight:10, flex:1}}>
              <Text style={{fontSize:18, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
              <Text style={{fontSize:15, fontWeight:'600', color:'#000', marginBottom:5}}>Size: M</Text>
              <Text style={{fontSize:18, fontWeight:'700', color:'#000'}}>$60.00</Text>
            </View>
            <View style={{backgroundColor:'#fff', borderRadius:50}}>
              <TouchableOpacity>
                <Text style={{padding:5}}><Icon name="add-outline" size={30} color="#000" /></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{padding:5}}><Icon name="remove-outline" size={30} color="#000" /></Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Single cart */}
          <View style={[styles.cartBox, {backgroundColor:'#faf2eb'}]}>
            <View style={{width: 70, height: 80, borderRadius:10}}>
              <Image
                style={{width: 70, height: 80, borderRadius:10}}
                source={require('../assets/images/03.jpg')}
                resizeMode="cover"
              />
            </View>
            <View style={{paddingLeft:10, paddingRight:10, flex:1}}>
              <Text style={{fontSize:18, fontWeight:'600', color:'#000'}}>Green Shirt</Text>
              <Text style={{fontSize:15, fontWeight:'600', color:'#000', marginBottom:5}}>Size: M</Text>
              <Text style={{fontSize:18, fontWeight:'700', color:'#000'}}>$60.00</Text>
            </View>
            <View style={{backgroundColor:'#fff', borderRadius:50}}>
              <TouchableOpacity>
                <Text style={{padding:5}}><Icon name="add-outline" size={30} color="#000" /></Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{padding:5}}><Icon name="remove-outline" size={30} color="#000" /></Text>
              </TouchableOpacity>
            </View>
          </View>


          {/* Amount */}
          <View style={{marginTop: 20, marginBottom:20}}>
            <View style={{flexDirection:'row', marginBottom:10}}>
              <Text style={{color:'#939398', fontSize:18, fontWeight:'600', flex:1}}>Subtotal</Text>
              <Text style={{color:'#000', fontSize:18, fontWeight:'600'}}>$352.00</Text>
            </View>
            <View style={{flexDirection:'row', marginBottom:20}}>
              <Text style={{color:'#939398', fontSize:18, fontWeight:'600', flex:1}}>Shipping</Text>
              <Text style={{color:'#000', fontSize:18, fontWeight:'600'}}>$5.00</Text>
            </View>
            <View style={{flexDirection:'row', borderTopColor: '#ccccce', borderTopWidth:1, paddingTop:10}}>
              <Text style={{color:'#939398', fontSize:22, fontWeight:'600', flex:1}}>Total</Text>
              <Text style={{color:'#000', fontSize:22, fontWeight:'600'}}>$357.00</Text>
            </View>
          </View>


          <View style={{padding:15, marginTop:20, width:'100%'}}>
            <View style={{width:'100%'}}>
              <TouchableOpacity>
                  <Text style={[styles.buttonStyle]} onPress={successful}>Buy Now</Text>
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
    height: 55,
    lineHeight:48,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 30
  },
  cartBox:{
    flexDirection:'row', 
    backgroundColor:'#ecf4fa', 
    padding:15, 
    borderRadius:20, 
    marginBottom:20,

    elevation:15,
    shadowColor:'#292929',
    // IOS 
    // shadowColor:'#000',
    // shadowOffset:{width:-2, height:4},
    // shadowOpacity:0.2,
    // shadowRadius:3
  }
});

export default Listing;
