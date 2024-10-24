import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import TodoScreen from "../src/screen/TodoScreen";
export default function Index() {
  return (
    <SafeAreaView
      style={{ paddingTop: 12, backgroundColor: "black", height: "100%" }}
    >
      <TodoScreen />
    </SafeAreaView>
  );
}
