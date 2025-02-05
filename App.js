import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Easing,Dimensions,
} from "react-native";
import background from "./assets/imgs/background.png";
import adventureMeter from "./assets/imgs/lightning.png";
import calendar from "./assets/imgs/calendar.png";
import plus from "./assets/imgs/plus.png";
import dots from "./assets/imgs/dots.png";
import water from "./assets/imgs/water.png";
import home from "./assets/imgs/home.png";
import todo from "./assets/imgs/todo.png";
import notes from "./assets/imgs/notes.png";
import settings from "./assets/imgs/settings.png";
import stats from "./assets/imgs/stats.png";
import racoon from "./assets/imgs/racoon.png";
import check from "./assets/imgs/check.png";
import uncheck from "./assets/imgs/uncheck.png";
import { Button } from "react-native";

const { width } = Dimensions.get('window');

export default function App() {
  const [count, setCount] = useState(0);

  const values = [-0.46 * width, -0.245 * width, -0.04 * width, 0.165 * width, 0.37 * width];

  const animatedTranslateX = useRef(new Animated.Value(values[0])).current;
  const animatedTranslateYs = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  const handlePress = () => {
    setCount((prev) => (prev + 1) % 5);
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
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={racoon} style={styles.racoon} />
        <Image source={background} style={styles.bg} />
      </View>
      <View style={{ width: "100%" }}>
        <Button title="increase" onPress={handlePress} />
        <View style={styles.adventures}>
          <Text style={styles.name}>Waffles</Text>
          <Image source={adventureMeter} style={styles.adventureMeter} />
          <View style={styles.adventureLevelWrapper}>
            <Text style={styles.adventureTitle}>1st Adventure</Text>
            <View style={styles.statusBar}>
              <View style={styles.statusBarProgress}>
                <View style={styles.statusBarLight}></View>
              </View>
              <Text style={styles.adventureCount}>4 / 10</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.notification}>
          <Image source={calendar} style={styles.calendar} />
          <Text style={styles.notificationText}>4 goals for today</Text>
          <Image source={plus} style={styles.plus} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={check} style={styles.check} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={uncheck} style={styles.check} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={check} style={styles.check} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={uncheck} style={styles.check} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={uncheck} style={styles.check} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={uncheck} style={styles.check} />
        </View>
        <View style={styles.goal}>
          <Image source={dots} style={styles.dots} />
          <Image source={water} style={styles.water} />
          <Text style={styles.goalText}>Drink a glass of water</Text>
          <Image source={uncheck} style={styles.check} />
        </View>
      </ScrollView>
      <View style={styles.menuBar}>
        <Animated.View
          style={[
            styles.activeMenu,
            {
              transform: [{ translateX: animatedTranslateX }],
            },
          ]}
        />
        {[notes, todo, home, stats, settings].map((icon, index) => (
          <Animated.View
            key={index}
            style={[
              {
                transform: [{ translateY: animatedTranslateYs[index] }],
              },
            ]}
          >
            <Image source={icon} style={styles.icons} />
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    display: "flex",
    width: "90%",
    height: 80,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  goalText: {
    width: "68%",
  },

  dots: {
    marginRight: 15,
    marginLeft: 5,
    width: 4,
    resizeMode: "contain",
  },

  water: {
    marginRight: 10,
    width: 36,
    resizeMode: "contain",
  },

  check: {
    width: 30,
    resizeMode: "contain",
  },

  container: {
    flex: 1,
    backgroundColor: "#A7C63C",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },

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

  name: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: -10,
    left: 10,
  },

  adventures: {
    width: "90%",
    height: 80,
    backgroundColor: "rgba(94, 107, 40, .42)",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    verticalAlign: "middle",
    gap: 10,
    alignSelf: "center",
    paddingBottom: 1,
    position: "relative",
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
    color: "#ca8f08",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
  },

  statusBarProgress: {
    backgroundColor: "#FFB100",
    width: "40%",
    height: "70%",
    marginLeft: 3,
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

  notification: {
    width: "90%",
    height: 40,
    gap: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: "auto",
    marginBlock: 7,
  },

  calendar: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },

  notificationText: {
    color: "white",
    fontWeight: "bold",
    flex: 1,
  },

  plus: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  scrollView: {
    width: "100%",
    maxHeight: "40.5%",
    display: "flex",
  },

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
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
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
