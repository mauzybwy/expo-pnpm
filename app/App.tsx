import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { test } from "@org/utils";

export default function App() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 100 }}>
        {test}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
