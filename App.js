import React, { Fragment } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import AppRouter from './app_src/routing/AppRouter';

const App = () => {
// const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <Fragment>
        <StatusBar 
        backgroundColor='#005ad4'
        animated={true}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
        <AppRouter />
      </Fragment>
  );
};


export default App;
