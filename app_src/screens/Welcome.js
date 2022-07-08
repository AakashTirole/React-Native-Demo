import React, {Fragment, useEffect, useState} from 'react';
import CompanySelectDD from '../component/CompanySelectDD';

import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = props => {
  const [userName, setUserName] = useState('');

  const navigator = props.navigation;
  const onPressHandler = () => {
    navigator.navigate('Home');
    // console.log('Athentication Successfully & directed to Home');
    Alert.alert('Athentication Successfully & directed to Home');
  };

  const getDataFromStorage = async () => {
    try {
      const getAccessToken = await AsyncStorage.getItem('accessToken_Key');
      const getUserName = await AsyncStorage.getItem('userName');
      if (getAccessToken !== null) {
        // value previously stored
        setUserName(getUserName);
        // Alert.alert('getAccessToken', getAccessToken);
        // Alert.alert('getUserName', getUserName);
      }
    } catch (e) {
      // error reading value
      console.error(e);
    }
  };

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <Fragment>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.WelcomeContainer}>
          <View style={styles.logoCover}>
            <Text style={styles.WelcomeText}>Welcome "{userName}" </Text>
          </View>
          {/* select company */}
          <View>
            <CompanySelectDD />
          </View>
          <View>
            <View style={styles.center}>
              <TouchableOpacity
                style={{width: 350, marginTop: '52%'}}
                onPress={onPressHandler}
                >
                <Text style={styles.getStartedBtn}> Go To Home Screen</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  WelcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    // borderWidth: 1,
    // borderColor: "#000"
  },
  logoCover: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginTop: '42%',
    marginBottom: 20,
  },
  AppLogo: {
    width: 100,
    height: 100,
    marginLeft: 20,
  },
  WelcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#414141',
    textTransform: 'capitalize',
  },
  WelcomeTextMain: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    color: '#414141',
  },
  getStartedBtn: {
    backgroundColor: '#FF00FF',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Welcome;
