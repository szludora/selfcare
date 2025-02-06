import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import calendar from "../assets/imgs/calendar.png";
import plus from "../assets/imgs/plus.png";
// import dots from "../assets/imgs/dots.png";
// import water from "../assets/imgs/water.png";
// import check from "../assets/imgs/check.png";
// import uncheck from "../assets/imgs/uncheck.png";
import Adventures from "../components/Adventures";
import goalList from "./goalList.json";
import Goal from "../components/Goal";

const MAX_SCROLL_Y = 240;
const { height } = Dimensions.get("window");

export default function Goals({ pushAnim, pushBg }) {
  const [GoalComponents, setGoalComponents] = useState(goalList.goals);

  useEffect(() => {}, [GoalComponents]);

  const initialState = {
    date: "today",
    text: "",
    source: "water",
    isDone: false,
  };

  const handlePress = () => {
    let oldID = GoalComponents[GoalComponents.length - 1].id;
    initialState.id = oldID + 1;
    setGoalComponents((prev) => [...prev, initialState]);
  };

  const getMaxHeight = (count) => {
    if (count === 3) return height * 0.27;
    if (count === 4) return height * 0.32;
    if (count === 5) return height * 0.37;
    if (count === 6) return height * 0.42;
    return height * 0.47;
  };

  const handleScrollEndDrag = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const velocity = event.nativeEvent.velocity.y;

    if (velocity > 8) {
      Animated.timing(pushAnim, {
        toValue: -contentOffsetY,
        duration: 400,
        useNativeDriver: true,
      }).start();

      Animated.timing(pushBg, {
        toValue: -contentOffsetY * 0.4,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleScroll = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const velocity = event.nativeEvent.velocity.y;

    if (velocity > 0) {
      if (!(contentOffsetY > MAX_SCROLL_Y)) {
        Animated.timing(pushAnim, {
          toValue: -contentOffsetY,
          duration: 400,
          useNativeDriver: true,
        }).start();

        Animated.timing(pushBg, {
          toValue: -contentOffsetY * 0.4,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    } else if (velocity > 1) {
      if (!(contentOffsetY > MAX_SCROLL_Y)) {
        Animated.timing(pushAnim, {
          toValue: -contentOffsetY,
          duration: 400,
          useNativeDriver: true,
        }).start();

        Animated.timing(pushBg, {
          toValue: -contentOffsetY * 0.4,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <>
      <Animated.View
        style={[
          styles.animated,
          {
            transform: [{ translateY: pushAnim }],
          },
        ]}
      >
        <Adventures />
        <View style={styles.notification}>
          <Image source={calendar} style={styles.calendar} />
          <Text style={styles.notificationText}>4 goals for today</Text>
          <TouchableOpacity onPress={handlePress}>
            <Image source={plus} style={styles.plus} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[
            styles.scrollView,
            { maxHeight: getMaxHeight(GoalComponents.length) },
          ]}
          onScroll={handleScroll}
          scrollEventThrottle={10}
          onScrollEndDrag={handleScrollEndDrag}
        >
          {GoalComponents.map((goal, index) => {
            return <Goal key={index} data={goal} />;
          })}

          <Text>Engem kellene láss</Text>
        </ScrollView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingBottom: 1,
    position: "relative",
    height: 40,
  },

  animated: {
    width: "100%",
    height: "100%",
    marginTop: "190%",
  },

  scrollView: {
    display: "flex",
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

  goal: {
    display: "flex",
    width: "90%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
