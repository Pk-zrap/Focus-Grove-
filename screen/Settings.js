// ===================== Import Modules & Components =====================
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from "react-native";

// ===================== Settings Screen =====================
const Settings = () => {
  // ===================== State สำหรับเปิด/ปิดเสียง =====================
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  // ===================== State สำหรับเปิด/ปิดการแจ้งเตือน =====================
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

  // ===================== ฟังก์ชัน toggle สำหรับเสียง =====================
  const toggleSound = () => setIsSoundEnabled(previousState => !previousState);
  // ===================== ฟังก์ชัน toggle สำหรับการแจ้งเตือน =====================
  const toggleNotification = () => setIsNotificationEnabled(previousState => !previousState);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* ===================== บัญชีผู้ใช้ ===================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>บัญชีผู้ใช้</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>แก้ไขโปรไฟล์</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>สมัครสมาชิก Premium 💎</Text>
        </TouchableOpacity>
      </View>

      {/* ===================== การใช้งาน ===================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>การใช้งาน</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>ตั้งค่าแท็กเริ่มต้น</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>ตั้งเป้าหมายการโฟกัสประจำวัน 🎯</Text>
        </TouchableOpacity>
      </View>

      {/* ===================== ระบบเสียง / การแจ้งเตือน ===================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ระบบเสียง / การแจ้งเตือน</Text>
        <View style={styles.switchRow}>
          <Text style={styles.optionText}>เสียงในเกม</Text>
          <Switch
            value={isSoundEnabled}
            onValueChange={toggleSound}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.optionText}>การแจ้งเตือน</Text>
          <Switch
            value={isNotificationEnabled}
            onValueChange={toggleNotification}
          />
        </View>
      </View>

      {/* ===================== ข้อมูลเกม ===================== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ข้อมูลเกม</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>ดูไอเทม & เหรียญ 🪙</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>เกี่ยวกับระบบกาชา 🎲</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E8E8E8",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#444",
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 14,
    color: "#333",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});

export default Settings;
