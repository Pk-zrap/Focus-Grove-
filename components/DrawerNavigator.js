import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>เมนู</Text>

      {/* ปุ่มสำหรับไปที่ Home */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.menuItem}>Home</Text>
      </TouchableOpacity>

      {/* ปุ่มสำหรับไปที่สมุดบันทึกต้นไม้ */}
      <TouchableOpacity onPress={() => navigation.navigate("TreeJournal")}>
        <Text style={styles.menuItem}>สมุดบันทึกต้นไม้</Text>
      </TouchableOpacity>

      {/* ปุ่มสำหรับไปที่ความท้าทายประจำวัน */}
      <TouchableOpacity onPress={() => navigation.navigate("DailyChallenges")}>
        <Text style={styles.menuItem}>ความท้าทายประจำวัน</Text>
      </TouchableOpacity>

      {/* ปุ่มสำหรับไปที่ความสำเร็จ */}
      <TouchableOpacity onPress={() => navigation.navigate("Achievements")}>
        <Text style={styles.menuItem}>ความสำเร็จ</Text>
      </TouchableOpacity>

      {/* ปุ่มสำหรับไปที่ร้านค้า */}
      <TouchableOpacity onPress={() => navigation.navigate("Shop")}>
        <Text style={styles.menuItem}>ร้านค้า</Text>
      </TouchableOpacity>

      {/* ปุ่มสำหรับไปที่ข่าวสาร */}
      <TouchableOpacity onPress={() => navigation.navigate("News")}>
        <Text style={styles.menuItem}>ข่าวสาร</Text>
      </TouchableOpacity>

      {/* ปุ่มสำหรับไปที่การตั้งค่า */}
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.menuItem}>การตั้งค่า</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default DrawerContent;
