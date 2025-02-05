import React from "react";
import { StyleSheet, View } from "react-native";

import MenuBar from "./components/MenuBar";
import Goals from "./components/Goals";
import Adventures from "./components/Adventures";
import RacoonBg from "./components/RacoonBg";

export default function App() {
  return (
    <View style={styles.container}>
      <RacoonBg />
      <Adventures />
      <Goals />
      <MenuBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A7C63C",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
});
