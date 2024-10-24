import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/images/todo.png")}
        style={{ height: 300, width: 300 }}
      />
      <Text>Start adding your task</Text>
    </View>
  );
};
export default Fallback;
