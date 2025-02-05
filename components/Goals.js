import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import calendar from "../assets/imgs/calendar.png";
import plus from "../assets/imgs/plus.png";
import dots from "../assets/imgs/dots.png";
import water from "../assets/imgs/water.png";
import check from "../assets/imgs/check.png";
import uncheck from "../assets/imgs/uncheck.png";

export default function Goals() {
  return (
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
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: "100%",
    maxHeight: "40.5%",
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
});
