import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.content}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1, // ใช้ flex 1 เพื่อให้ View ขยายเต็มพื้นที่
    justifyContent: "center", // จัดตำแหน่งในแนวแกน Y (แนวตั้ง) ให้อยู่กลาง
    alignItems: "center", // จัดตำแหน่งในแนวแกน X (แนวนอน) ให้อยู่กลาง
  },
});

export default Home;
