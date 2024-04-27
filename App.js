import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal,StatusBar } from 'react-native';

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 60 }}>
      <Button title='Toggle Modal' color="green" onPress={() => setIsModalVisible(!isModalVisible)} />
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Hello from Modal!</Text>
            <Button title="Close Modal" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Pressable onPress={() => console.log("hello world")}>
          <Text style={{ color: "black", fontSize: 24 }}>Hello world</Text>
        </Pressable>
        <Text style={{ color: "black", fontSize: 24 }}>
          The standard Lorem Ipsum passage, used since the 1500s...
        </Text>
      </ImageBackground>
      <StatusBar style="auto" hidden />
    </ScrollView>
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
