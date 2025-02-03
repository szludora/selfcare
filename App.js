import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import background from "./assets/imgs/background.png";
import adventureMeter from "./assets/imgs/lightning.png";
// import calendar from "./assets/imgs/calendar.png"
// import home from "./assets/imgs/home.png"
// import stats from "./assets/imgs/stats.png"
// import settings from "./assets/imgs/settings.png"
// import dots from "./assets/imgs/dots.png"
// import water from "./assets/imgs/water.png"
// import check from "./assets/imgs/check.png"
// import uncheck from "./assets/imgs/uncheck.png"
// import plus from "./assets/imgs/plus.png"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={background} style={styles.bg} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.adventures}>
            <Image source={adventureMeter}></Image>
            <Text style={styles.adventureText}>Waffles</Text>
            <Text style={styles.adventureText}>1st Adventure</Text>
            <View style={styles.statusBar}>
              <View style={styles.statusBarLight}></View>
              <Text style={styles.adventureText}>4 / 10</Text>
            </View>
          </View>
        </View>
        <View style={styles.notification}>
          <Image style={styles.calendar} />
          <Text style={styles.notificationText}>4 goals for today</Text>
          <Image style={styles.plus} />
        </View>
        <View style={styles.goal}>
          <Image style={styles.water} />
          <Text style={styles.check}>Drink a glass of water</Text>
          <Image />
        </View>
        <View style={styles.goal}>
          <Image style={styles.water} />
          <Text style={styles.check}>Drink a glass of water</Text>
          <Image />
        </View>
        <View style={styles.goal}>
          <Image style={styles.water} />
          <Text style={styles.check}>Drink a glass of water</Text>
          <Image />
        </View>
      </ScrollView>
      <View style={styles.menuBar}>
        <View style={styles.activeMenu}>
          <Text>asd</Text>
        </View>
        <View style={styles.menuIcon}></View>
      </View>
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
  },
  notification: {
    width: "95%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
  },
  notificationText: {
    color: "white",
  },
  adventures: {
    width: "95%",
    height: 80,
    backgroundColor: "rgba(94, 107, 40, .42)",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  scrollView: {
    width: "100%",
    maxHeight: "40.5%",
    display: "flex",
  },
  goal: {
    width: "95%",
    height: 80,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    margin: "auto",
    justifyContent: "center",
    padding: 30,
  },
  menuBar: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: 50,
    backgroundColor: "green",
    position: "relative",
  },
  activeMenu: {
    width: 60,
    height: 60,
    backgroundColor: "yellow",
    borderRadius: "50%",
    position: "relative",
    bottom: 20,
    padding: 0,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  menuIcon: {
    width: 60,
    height: 60,
  },
  adventureText: {
    color: "white",
  },
});
