import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import Slider from "@react-native-community/slider";

const Home = () => {
  return (

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  coinText: {
    fontSize: 18,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  plantText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  tag: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedTag: {
    backgroundColor: "lightblue",
  },
  timerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Home;
