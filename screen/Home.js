import React from "react";
import { View, StyleSheet} from "react-native";
import TimeDisplay from "../components/TimeDisplay";

const Home = () => {
  return (
    <View style={styles.container}>
      <TimeDisplay />
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
