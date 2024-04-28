import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';

const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  // Define an array of colors
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "brown"];

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      {/* Map through the colors array and render a View for each color */}
      {colors.map((color, index) => (
        <View key={index} style={[styles.box, { backgroundColor: color }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
