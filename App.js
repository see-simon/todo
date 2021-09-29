import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Landing from './componets/Landing';
import Users from './componets/Users';

import Menu from './Menu';


export default function App() {
  
  return (
    // <safeAreaProvider>
    <SafeAreaView>

      <Landing />
      <Users />
    </SafeAreaView>


    // </safeAreaProvider>
  );
}


