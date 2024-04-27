import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={{ backgroundColor: "red", width: 200, height: 200 }}></View>
      <View style={{ backgroundColor: "green", width: 200, height: 200 }}></View>
      <View style={{ backgroundColor: "blue", width: 200, height: 200 }}></View>

      <StatusBar style="auto" />
    </View>
  );
}
