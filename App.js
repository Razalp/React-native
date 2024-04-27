import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
const logoImage =require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text className="text-black text-5xl">Hello world</Text>
      <Image className="h-80 w-32" source={logoImage}/>
      <Image className="h-80 w-32 object-fill" source={{uri:"https://picsum.photos/300/300"}}/>

      <StatusBar style="auto" />
    </View>
  );
}
