import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import MenuBar from "./components/MenuBar";
import Goals from "./components/Goals";
import RacoonBg from "./components/RacoonBg";

export default function App() {
  const pushAnim = useRef(new Animated.Value(0)).current;
  const pushBg = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <RacoonBg pushAnim={pushAnim} pushBg={pushBg} />
      <Goals pushAnim={pushAnim} pushBg={pushBg} />
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
