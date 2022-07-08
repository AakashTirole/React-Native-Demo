import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import StartScreen from '../screens/StartScreen';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile'
import Successful from '../screens/Successful'
import Listing from '../screens/Listing'
import Welcome from '../screens/Welcome'

const Stack = createNativeStackNavigator();
const AppRouter = ()  => { 
  return (
    <Fragment>
				<NavigationContainer>
					<Stack.Navigator initialRouteName='StartScreen'
            screenOptions={{
              headerStyle:{
                backgroundColor:"yellow",
              },
              headerTintColor:'black',
            }}
          >
						<Stack.Screen 
							name="StartScreen" 
              component={StartScreen} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="SignIn" 
              component={SignIn} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="SignUp" 
              component={SignUp} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="Home" 
              component={Home} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="ProductDetail" 
              component={ProductDetail} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="Cart" 
              component={Cart} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="Profile" 
              component={Profile} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="Successful" 
              component={Successful} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="Listing" 
              component={Listing} 
							options={{ headerShown:false }} />
            <Stack.Screen 
							name="Welcome" 
              component={Welcome} 
							options={{ headerShown:false }} />
					</Stack.Navigator>
				</NavigationContainer>
    </Fragment>
  );
};
export default AppRouter;
