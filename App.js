import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import background from "./assets/imgs/background.png";
import adventureMeter from "./assets/imgs/lightning.png";
import calendar from "./assets/imgs/calendar.png"
import plus from "./assets/imgs/plus.png"
import dots from "./assets/imgs/dots.png"
import water from "./assets/imgs/water.png"
// import home from "./assets/imgs/home.png"
import racoon from "./assets/imgs/racoon.png"
// import stats from "./assets/imgs/stats.png"
// import settings from "./assets/imgs/settings.png"
import check from "./assets/imgs/check.png"
import uncheck from "./assets/imgs/uncheck.png"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={racoon} style={styles.racoon} />
        <Image source={background} style={styles.bg} />
      </View>
      <View style={{ width: "100%" }}>
        <View style={styles.adventures}>
          <Text style={styles.name}>Waffles</Text>
          <Image source={adventureMeter} style={styles.adventureMeter}></Image>
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
        <View style={styles.activeMenu}>
          <Text></Text>
        </View>
        <View style={styles.menuIcon}></View>
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
    margin: "auto",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  goalText: {
    width: "68%",
  },

  dots: {
    marginRight: 15,
    marginLeft: 5,
    width: 4,
    resizeMode: "contain"
  },

  water: {
    marginRight: 10,
    width: 36,
    resizeMode: "contain"
  },

  check: {
    width: 30,
    resizeMode: "contain",
    marginRight: 15
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
    position: "relative"
  },

  racoon: {
    zIndex: 2,
    position: "absolute",
    bottom: 90,
    left: 80,
    width: 130,
    height: 130,
    resizeMode: "contain"
  },

  name: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: -10,
    left: 10
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
    position: "relative"
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
    width: "95%"
  },

  statusBar: {
    display: "flex",
    width: "auto",
    marginRight: 70,
    backgroundColor: "white",
    justifyContent: "center",
    //backgroundColor: "#ca8f08",
    height: 20,
    borderRadius: 18
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
    fontWeight: "bold"
  },

  statusBarProgress: {
    backgroundColor: "#FFB100",
    width: "40%",
    height: "70%",
    marginLeft: 3,
    borderRadius: 18,
    position: "relative",
    display: "flex",
    alignItems: "center"
  },

  statusBarLight: {
    position: "absolute",
    backgroundColor: "#FFC61D",
    borderRadius: 8,
    width: "90%",
    height: 2,
    top: 2
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
    flex: 1
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
  }

});
