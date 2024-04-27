import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
     
      <Text>
      <Text className="text-white">Hello world</Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
