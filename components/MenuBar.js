import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import notes from "../assets/imgs/notes.png";
import todo from "../assets/imgs/todo.png";
import home from "../assets/imgs/home.png";
import stats from "../assets/imgs/stats.png";
import settings from "../assets/imgs/settings.png";

const icons = [notes, todo, home, stats, settings];
const { width } = Dimensions.get("window");

export default function MenuBar() {
  const [count, setCount] = useState(2);

  const values = [
    -0.46 * width,
    -0.245 * width,
    -0.04 * width,
    0.165 * width,
    0.37 * width,
  ];

  const animatedTranslateX = useRef(new Animated.Value(values[0])).current;
  const animatedTranslateYs = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  const handlePress = (index) => {
    setCount(index);
  };

  useEffect(() => {
    Animated.timing(animatedTranslateX, {
      toValue: values[count],
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    const iconAnimations = animatedTranslateYs.map((_, index) =>
      Animated.timing(animatedTranslateYs[index], {
        toValue: count === index ? -10 : 0,
        duration: 500,
        useNativeDriver: true,
      })
    );

    Animated.stagger(100, iconAnimations).start();
  }, [count]);

  return (
    <View style={styles.menuBar}>
      <Animated.View
        style={[
          styles.activeMenu,
          {
            transform: [{ translateX: animatedTranslateX }],
          },
        ]}
      />
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            handlePress(index);
          }}
        >
          <Animated.View
            style={[
              {
                transform: [{ translateY: animatedTranslateYs[index] }],
              },
            ]}
          >
            <Image source={icon} style={styles.icons} />
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 35,
    height: 35,
  },

  menuBar: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#FFDB8E",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    bottom: 0,
  },

  activeMenu: {
    padding: 30,
    backgroundColor: "#FFDB8E",
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    left: "50%",
    transition: "left 2s ease-in-out",
  },

  activeIcon: {
    bottom: 15,
  },
});
