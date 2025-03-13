import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Load from "./screen/Loading";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsloaded] = useFonts({
    Sen: require("./assets/fonts/Sen-VariableFont_wght.ttf"),
  });

  if (!fontsloaded) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Load />
    </View>
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
