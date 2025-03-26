import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Load = () => {
  return (
    <View style={styles.content}>
      <Image source={require("../assets/Logo.png")} style={styles.treeImage} />
      <Text style={styles.title}>Focus Grove</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  treeImage: {
    width: 88, 
    height: 88,

  },
  title: {
    fontSize: 27,
    fontFamily: "SenBold",
    color: "#343334",
    marginTop: 5,
  
  },
});

export default Load;
