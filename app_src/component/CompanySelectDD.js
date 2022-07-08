import React, {Fragment, useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View, FlatList, SafeAreaView, Alert} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];



const CompanySelectDD = (props) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Select Company
        </Text>
      );
    }
    return null;
  };



  /***************/
  // const [id, setID] = useState('');
  // const [companyName, setcompanyName] = useState('');
  

  const [compnayList, setcompnayList] = useState([]);
  const SelectComapny = compnayList.map(company => ({
    label: company.companyName,
    value: company.id
  }));
  
  const getCompanyList = async() => {

    try{
      var getAccessToken = await AsyncStorage.getItem('accessToken_Key');

      if(getAccessToken !== null){
        getAccessToken = getAccessToken.split(":")[1];
        getAccessToken = getAccessToken.split(",")[0];
        getAccessToken = getAccessToken.split(",")[0].toString();
        
        var myFinalTokent = `Bearer ${getAccessToken}`;
        getAccessToken = myFinalTokent.replace('"', "").replace('"', "");
        // getToken(getAccessToken);
        console.log('myFinalTokent', myFinalTokent);
        await fetch('https://uat.onplanapp.com/api/user/findUserCompanyList?userId=1&isImpersonate=false', {
          credentials: 'include',
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Authorization' : getAccessToken,
          },
          // parms: JSON.stringify({
          //   'companyID': id,
          //   'companyName': companyName,
          // })
          
        }).then(res => res.json())
        .then(resData => {
          setcompnayList(previousData => [...previousData, ...resData.body]);
        })
        .catch(function(error){
          throw error;
        })
      }
    }catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getCompanyList();
    console.log("SelectComapny", SelectComapny);
  }, []);

  return (
    <Fragment>
      <View>
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={SelectComapny}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <Button onPress={getCompanyList} title='companyList' />
        
        <View>
          {/* <FlatList 
            data={compnayList}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=>
            <Text> hello{item.companyName}</Text>
            }
          /> */}
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  dropdown: {
    height: 45,
    width: 350,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: '#efefef',
    left: 22,
    top: 0,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 45,
    fontSize: 16,
  },
});

export default CompanySelectDD;
