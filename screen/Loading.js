import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Load = () => {
  return (
    <View style={styles.content}>
      <Image source={require("../assets/Logo1.png")} style={styles.treeImage} />
      <Text style={styles.title}>Focus Grove</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  treeImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Load;
