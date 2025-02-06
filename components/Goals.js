import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import calendar from "../assets/imgs/calendar.png";
import plus from "../assets/imgs/plus.png";
import water from "../assets/imgs/water.png";
import exercise from "../assets/imgs/exercise.png";
import study from "../assets/imgs/study.png";
import food from "../assets/imgs/food.png";
import Adventures from "../components/Adventures";
import GoalsModel from "../models/GoalsModel";
import Goal from "../components/Goal";
import close from "../assets/imgs/close.png";
import { Button } from "react-native";

const MAX_SCROLL_Y = 240;
const { height } = Dimensions.get("window");
const iconList = ["water", "food", "exercise", "study"];

export default function Goals({ pushAnim, pushBg }) {
  const inputRef = useRef(null);
  const [model] = useState(new GoalsModel());
  const [isVisible, setIsVisible] = useState(false);
  const [value, onChangeText] = useState("To do...");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [countGoals, setCountGoals] = useState(model.getList().length);
  const [countDoneGoals, setCountDoneGoals] = useState(model.getDoneList());
  const scrollRef = useRef(null);

  const handlePress = () => {
    setIsVisible(true);
  };

  const getMaxHeight = (count) => {
    if (count < 3 || count === 3) return height * 0.27;
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

  const submitNewTodo = (event) => {
    const oldID = model.getList()[model.getList().length - 1].id;
    const newModel = {
      id: oldID + 1,
      date: "today",
      text: value,
      source: iconList[selectedIcon],
      isDone: false,
    };

    model.pushToList(newModel);
    setCountGoals(model.getList().length);
    handleClose();
  };

  const changeIcon = (index) => {
    setSelectedIcon(index);
  };

  const handleClose = () => {
    setIsVisible(false);
    onChangeText("To do...");
  };

  const handleTextChange = (text) => {
    onChangeText(text);
  };

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.setSelection(0, value.length);
    }
  };

  return (
    <>
      <View style={[styles.modal, { display: isVisible ? "flex" : "none" }]}>
        <TouchableOpacity onPress={handleClose}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>

        <SafeAreaProvider>
          <SafeAreaView style={[styles.container]}>
            <TextInput
              editable
              multiline
              ref={inputRef}
              numberOfLines={2}
              maxLength={150}
              onFocus={(text) => {
                handleFocus(text);
              }}
              onChangeText={handleTextChange}
              value={value}
              style={styles.textInput}
            />

            <View style={styles.iconsContainer}>
              <TouchableOpacity
                onPress={() => {
                  changeIcon(0);
                }}
              >
                <View
                  style={[
                    styles.iconWrapper,
                    selectedIcon === 0 && styles.selectedIcon,
                  ]}
                >
                  <Image source={water} style={styles.icon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  changeIcon(1);
                }}
              >
                <View
                  style={[
                    styles.iconWrapper,
                    selectedIcon === 1 && styles.selectedIcon,
                  ]}
                >
                  <Image source={food} style={styles.icon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  changeIcon(2);
                }}
              >
                <View
                  style={[
                    styles.iconWrapper,
                    selectedIcon === 2 && styles.selectedIcon,
                  ]}
                >
                  <Image source={exercise} style={styles.icon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  changeIcon(3);
                }}
              >
                <View
                  style={[
                    styles.iconWrapper,
                    selectedIcon === 3 && styles.selectedIcon,
                  ]}
                >
                  <Image source={study} style={styles.icon} />
                </View>
              </TouchableOpacity>
            </View>

            <Button title="Elküld" onPress={submitNewTodo} />
          </SafeAreaView>
        </SafeAreaProvider>
      </View>
      <Animated.View
        style={[
          styles.animated,
          {
            transform: [{ translateY: pushAnim }],
          },
        ]}
      >
        <Adventures countGoals={countGoals} countDoneGoals={countDoneGoals} />

        <View style={styles.notification}>
          <Image source={calendar} style={styles.calendar} />
          <Text style={styles.notificationText}>
            {countGoals} goals for today
          </Text>
          <TouchableOpacity onPress={handlePress}>
            <Image source={plus} style={styles.plus} />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[
            styles.scrollView,
            { maxHeight: getMaxHeight(model.getList().length) },
          ]}
          onScroll={handleScroll}
          scrollEventThrottle={10}
          onScrollEndDrag={handleScrollEndDrag}
          ref={scrollRef}
        >
          {model.getList().map((goal, index) => {
            return (
              <Goal
                key={index}
                data={goal}
                setCountDoneGoals={setCountDoneGoals}
              />
            );
          })}

          <Text>Engem kellene láss</Text>
        </ScrollView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  selectedIcon: {
    transform: [{ translateY: 1 }],
    backgroundColor: "#2dedf7",
  },

  iconWrapper: {
    backgroundColor: "white",
    width: 60,
    height: 65,
    padding: 10,
    borderRadius: 15,
    boxShadow: "#aaa 2 2 4",
  },

  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  icon: {
    //backgroundColor: "gray",
    marginRight: 10,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  close: {
    width: 23,
    height: 23,
    resizeMode: "cover",
    alignSelf: "flex-end",
  },

  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    transform: [{ translateX: "-50%" }],
    left: "50%",
    padding: 10,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  textInput: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  modal: {
    position: "absolute",
    width: "80%",
    height: "30%",
    backgroundColor: "#d8d8d8",
    opacity: 1,
    borderRadius: 15,
    zIndex: 2,
    transform: [{ translateX: "-50%" }],
    left: "50%",
    display: "none",
    padding: 9,
  },

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
