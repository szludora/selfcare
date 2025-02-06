import React, { useReducer, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import dots from "../assets/imgs/dots.png";
import check from "../assets/imgs/check.png";
import uncheck from "../assets/imgs/uncheck.png";
import GoalModel from "../models/GoalModel";

const ACTIONS = {
  setState: "setState",
  setID: "setID",
  setDate: "setDate",
  toggleIsDone: "toggleIsDone",
  changeSource: "changeSource",
  changeText: "changeText",
};

const initialState = { date: "2000", text: "", source: "water", isDone: false };

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.setState: {
      return {
        ...state,
        id: action.id,
        date: action.date,
        isDone: action.isDone,
        text: action.text,
        source: action.source,
      };
    }
    case ACTIONS.setID: {
      return {
        ...state,
        id: action.id,
      };
    }
    case ACTIONS.setDate: {
      return {
        ...state,
        date: action.date,
      };
    }
    case ACTIONS.toggleIsDone: {
      return {
        ...state,
        isDone: action.isDone,
      };
    }
    case ACTIONS.changeText: {
      return {
        ...state,
        text: action.text,
      };
    }
    case ACTIONS.changeSource: {
      return {
        ...state,
        source: action.source,
      };
    }
    default:
      return state;
  }
}

const images = {
  water: require("../assets/imgs/water.png"),
  plus: require("../assets/imgs/plus.png"),
  calendar: require("../assets/imgs/calendar.png"),
};

export default function Goal({ data }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const model = new GoalModel(
    data.id,
    data.text,
    data.source,
    data.date,
    data.isDone
  );

  useEffect(() => {
    dispatch({
      type: ACTIONS.setState,
      id: model.getId(),
      text: model.getText(),
      source: model.getSource(),
      date: model.getDate(),
      isDone: model.getIsDone(),
    });
    console.log(state);
    
  }, []);


  const handlePress = () => {
    dispatch({type: ACTIONS.toggleIsDone, isDone: !state.isDone})
  }

  return (
    <View style={styles.goal}>
      <Image source={dots} style={styles.dots} />
      <Image source={images[state.source]} style={styles.water} />
      <Text style={styles.goalText}>{state.text}</Text>
      <TouchableHighlight onPress={handlePress} underlayColor="transparent">
      <Image source={state.isDone ? check : uncheck} style={styles.check}/>
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
