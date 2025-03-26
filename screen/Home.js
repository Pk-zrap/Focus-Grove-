import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import TimeDisplay from "../components/TimeDisplay";

const Home = () => {
  return (
    <View style={styles.container}>
      <TimeDisplay></TimeDisplay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E8E8E8",
  },
 
});

export default Home;