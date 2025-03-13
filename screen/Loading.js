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
    flex: 1, // ใช้ flex 1 เพื่อให้ View ขยายเต็มพื้นที่
    justifyContent: "center", // จัดตำแหน่งในแนวแกน Y ให้อยู่กลาง
    alignItems: "center", // จัดตำแหน่งในแนวแกน X ให้อยู่กลาง
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
    marginTop: 20, // เพิ่มระยะห่างระหว่างรูปกับข้อความ
  },
});

export default Load;
