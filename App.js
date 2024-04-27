import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal,StatusBar,ActivityIndicator ,Alert} from 'react-native';
import Greet from './Componets/Greet';

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {


  return (
<View>
  <Text>hello</Text>
  <Greet name="razal"/>
  <Greet name="moos"/>
  <Greet name="razal moosa"/>
</View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
