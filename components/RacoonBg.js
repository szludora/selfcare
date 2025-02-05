import React from "react";
import { StyleSheet, View, Image } from "react-native";
import racoon from "../assets/imgs/racoon.png";
import background from "../assets/imgs/background.png";

export default function RacoonBg() {
  return (
    <View style={styles.view}>
      <Image source={racoon} style={styles.racoon} />
      <Image source={background} style={styles.bg} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: "100%",
  },

  bg: {
    padding: 0,
    width: "100%",
    height: 475,
    margin: 0,
    resizeMode: "contain",
    position: "relative",
  },

  racoon: {
    zIndex: 2,
    position: "absolute",
    bottom: "15%",
    left: "20%",
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
});
