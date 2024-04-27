import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
const logoImage =require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text className="text-black text-3xl">Hello world</Text>
      <Image className="h-80 w-32" source={logoImage}/>
      <StatusBar style="auto" />
    </View>
  );
}
