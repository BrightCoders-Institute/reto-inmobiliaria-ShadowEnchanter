import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {

  return (
    <SafeAreaView style={{backgroundColor: 'white', }}>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App;