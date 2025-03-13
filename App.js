import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Load from "./screen/Loading";
import Intro1 from "./screen/intro1";
import { useFonts } from "expo-font";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsloaded] = useFonts({
    Sen: require("./assets/fonts/Sen-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);

  if (!fontsloaded) {
    return (
      <View style={styles.container}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>{isLoading ? <Load /> : <Intro1 />}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F5",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
