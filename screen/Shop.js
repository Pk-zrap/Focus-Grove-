import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>นี้คือหน้า Shop</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E8E8E8",

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Shop;
