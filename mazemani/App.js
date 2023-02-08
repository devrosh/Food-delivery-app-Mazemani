import React from 'react';
import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import AuthNavigator from './src/navigations/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
