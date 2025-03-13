import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ยินดีต้อนรับสู่หน้า Home</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Home;
