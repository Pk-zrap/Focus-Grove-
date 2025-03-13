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
    width: "100%", // ขยายให้เต็มความกว้างของหน้าจอ
    alignItems: "center", // จัดตำแหน่งให้ตรงกลาง
  },
  treeImage: {
    width: 88, // กำหนดความกว้างของรูป
    height: 88, // กำหนดความสูงของรูป
  },
  title: {
    fontSize: 40, // ขนาดของตัวอักษร
    fontWeight: "bold", // ความหนาของตัวอักษร
    fontFamily: "Sen", // ฟอนต์ที่ใช้
    color: "#343334", // สีของข้อความ
  },
});

export default Load;
