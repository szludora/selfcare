import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import dots from "../assets/imgs/dots.png";
import check from "../assets/imgs/check.png";
import uncheck from "../assets/imgs/uncheck.png";

const images = {
  water: require("../assets/imgs/water.png"),
  exercise: require("../assets/imgs/exercise.png"),
  food: require("../assets/imgs/food.png"),
  study: require("../assets/imgs/study.png"),
  plus: require("../assets/imgs/plus.png"),
  calendar: require("../assets/imgs/calendar.png"),
};

export default function Goal({ data, setCountDoneGoals }) {
  const [isDone, setIsDone] = useState(data.isDone);

  const handlePress = () => {
    if (!isDone) {
      setCountDoneGoals((prev) => prev + 1);
    } else {
      setCountDoneGoals((prev) => prev - 1);
    }
    data.isDone = !isDone;
    
    setIsDone((prev) => !prev);
  };

  return (
    <View style={styles.goal}>
      <Image source={dots} style={styles.dots} />
      <Image source={images[data.source]} style={styles.water} />
      <Text style={styles.goalText}>{data.text}</Text>
      <TouchableHighlight onPress={handlePress} underlayColor="transparent">
        <Image source={isDone ? check : uncheck} style={styles.check} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    display: "flex",
    width: "90%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  goalText: {
    width: "65%",
  },

  dots: {
    marginRight: 15,
    marginLeft: 5,
    width: 4,
    resizeMode: "contain",
  },

  water: {
    marginRight: 10,
    width: 30,
    resizeMode: "contain",
  },

  check: {
    width: 30,
    resizeMode: "contain",
  },
});
