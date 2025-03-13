import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const WeeklyLogin = () => {
  const [loginStatus, setLoginStatus] = useState([
    { day: "วันจันทร์", isLoggedIn: true, imageUrl: require("../assets/Exchange.jpeg") },
    { day: "วันอังคาร", isLoggedIn: false, imageUrl: require("../assets/Exchange.jpeg") },
    { day: "วันพุธ", isLoggedIn: true, imageUrl: require("../assets/Exchange.jpeg") },
    { day: "วันพฤหัสบดี", isLoggedIn: true, imageUrl: require("../assets/Exchange.jpeg") },
    { day: "วันศุกร์", isLoggedIn: false, imageUrl: require("../assets/Exchange.jpeg") },
    { day: "วันเสาร์", isLoggedIn: true, imageUrl: require("../assets/Exchange.jpeg") },
    { day: "วันอาทิตย์", isLoggedIn: false, imageUrl: require("../assets/Exchange.jpeg") },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* แสดงชื่อวัน */}
      <Text style={styles.dayText}>{item.day}</Text>
      {/* แสดงภาพตามสถานะการล็อคอิน */}
      <Image source={item.imageUrl} style={styles.image} />
      {/* เพิ่มข้อความแสดงสถานะ */}
      <Text style={styles.statusText}>
        {item.isLoggedIn ? "สำเร็จ" : "ล้มเหลว"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ล็อคอินประจำสัปดาห์</Text>
      <FlatList
        data={loginStatus}
        renderItem={renderItem}
        keyExtractor={(item) => item.day}
        horizontal={false} // แสดงเป็นแนวตั้ง
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,  // เพิ่มระยะห่างระหว่างวัน
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    width: "80%",
    justifyContent: "space-between",
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    width: '40%',  // เพิ่มความกว้างเพื่อจัดเรียงให้ดี
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  statusText: {
    fontSize: 14,
    color: "#333",
    width: '30%', // จัดให้ข้อความไม่ยาวเกินไป
    textAlign: "center",
  },
});

export default WeeklyLogin;
