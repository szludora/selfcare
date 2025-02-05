import React from "react";
import { StyleSheet, View, Image, Animated, Dimensions } from "react-native";
import racoon from "../assets/imgs/racoon.png";
import background from "../assets/imgs/background.png";

const { width, height } = Dimensions.get("window");

export default function RacoonBg({ pushBg, pushAnim }) {
  console.log(width, height);

  return (
    <Animated.View
      style={[
        styles.animated,
        {
          transform: [{ translateY: pushBg }],
        },
      ]}
    >
      <View style={styles.view}>
        <Image source={racoon} style={styles.racoon} />
        <Image source={background} style={styles.bg} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  animated: {
    width: width,
    height: height * 0.4,
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },

  view: {
    flex: 1,
    width: "100%",
  },

  bg: {
    padding: 0,
    width: width,
    height: height * 0.525,
    margin: 0,
    resizeMode: "cover",
    position: "relative",
  },

  racoon: {
    zIndex: 2,
    position: "absolute",
    transform: [{ translateX: width * 0.25 }, { translateY: height * 0.16 }],
    width: height * 0.15,
    height: height * 0.15,
    resizeMode: "contain",
  },
});
