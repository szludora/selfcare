import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import adventureMeter from "../assets/imgs/lightning.png";

export default function Adventures({ countGoals, countDoneGoals }) {
  const progressWidth = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(progressWidth, {
      toValue: (countDoneGoals / countGoals) * 100,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [countDoneGoals, countGoals]);

  return (
    <View style={styles.adventures}>
      <Text style={styles.name}>Waffles</Text>
      <Image source={adventureMeter} style={styles.adventureMeter} />
      <View style={styles.adventureLevelWrapper}>
        <Text style={styles.adventureTitle}>1st Adventure</Text>
        <View style={styles.statusBar}>
          <Animated.View
            style={[
              styles.statusBarProgress,
              {
                width: progressWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          >
            <View style={styles.statusBarLight}></View>
          </Animated.View>
          <Text style={styles.adventureCount}>
            {countDoneGoals} / {countGoals}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: -10,
    left: 10,
  },

  adventures: {
    display: "flex",
    width: "90%",
    height: 80,
    backgroundColor: "rgba(94, 107, 40, .42)",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    verticalAlign: "middle",
    gap: 10,
    alignSelf: "center",
    paddingBottom: 1,
    position: "relative",
    marginTop: 79,
  },

  adventureMeter: {
    width: 30,
    height: "auto",
    resizeMode: "contain",
    marginLeft: 15,
  },

  adventureLevelWrapper: {
    display: "flex",
    justifyContent: "center",
    verticalAlign: "middle",
    width: "95%",
  },

  statusBar: {
    display: "flex",
    width: "auto",
    marginRight: 70,
    paddingInline: 3,
    backgroundColor: "white",
    justifyContent: "center",
    height: 20,
    borderRadius: 18,
  },

  adventureTitle: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
  },

  adventureCount: {
    color: "rgb(154, 105, 0)",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },

  statusBarProgress: {
    backgroundColor: "#FFB100",
    width: 0,
    height: "70%",
    borderRadius: 18,
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  statusBarLight: {
    position: "absolute",
    backgroundColor: "#FFC61D",
    borderRadius: 8,
    width: "90%",
    height: 2,
    top: 2,
  },
});
