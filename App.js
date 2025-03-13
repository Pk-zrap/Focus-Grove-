import React from "react";
import { View, StyleSheet } from "react-native";
import Load from "./screen/Loading";

const App = () => {
  return (
    <View style={styles.container}>
      <Load />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
