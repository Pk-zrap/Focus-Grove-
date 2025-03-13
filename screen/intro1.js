import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Intro1 = () => {
  return (
    <View style={styles.container}>
      {/* ส่วนของรูปภาพ */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Intro1.png")}
          style={styles.plantImage}
        />
      </View>

      {/* ส่วนของข้อความ Title */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>เริ่มต้นการโฟกัส</Text>
      </View>

      {/* ส่วนของข้อความ Subtitle */}
      <Text style={styles.subtitle}>
        เริ่มต้นการเดินทางแห่งการโฟกัสของคุณปลูกต้นไม้แห่งสมาธิและเติบโตไปพร้อมกัน
      </Text>

      {/* ส่วนของ Dot Indicators (ก่อนปุ่ม NEXT) */}
      <View style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* ปุ่ม NEXT */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>

      {/* ปุ่ม Skip */}
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40, // ระยะห่างจากขอบของ View
    justifyContent: "center", // จัดตำแหน่งให้เนื้อหากลางหน้าจอ
    alignItems: "center", // จัดเนื้อหาทั้งหมดให้อยู่กลาง
  },
  imageContainer: {
    alignItems: "center", // จัดรูปภาพให้อยู่กลาง
    marginBottom: 40, // ระยะห่างจากรูปไปยังข้อความ Title
  },
  plantImage: {
    width: 300, // กำหนดความกว้างของรูป
    height: 261, // กำหนดความสูงของรูป
  },
  textContainer: {
    alignItems: "center", // จัดข้อความให้อยู่กลาง
    marginBottom: 40, // ระยะห่างจากข้อความ Title ไปยัง Subtitle
  },
  title: {
    fontSize: 24, // ขนาดตัวอักษร
    color: "#32343E", // สีของข้อความ
    fontWeight: "bold", // ความหนาของตัวอักษร
  },
  subtitle: {
    fontSize: 16, // ขนาดตัวอักษรของ subtitle (ตาม Figma)
    textAlign: "center", // จัดข้อความให้อยู่กลาง
    color: "#646982", // สีของข้อความ
    marginBottom: 40, // ระยะห่างจาก Subtitle ไปยังปุ่ม NEXT
  },
  dotsContainer: {
    flexDirection: "row", // จัดให้อยู่ในแนวนอน
    marginBottom: 40, // ระยะห่างจาก dots ไปยังปุ่ม NEXT
  },
  dot: {
    width: 10, // กำหนดความกว้างของ dot
    height: 10, // กำหนดความสูงของ dot
    borderRadius: 10, // ขอบ dot ให้โค้งมน
    backgroundColor: "#9B9B9B", // สีพื้นหลังของ dot
    marginHorizontal: 5, // ระยะห่างของแต่ละ dot
  },
  dotActive: {
    width: 10, // กำหนดความกว้างของ dot
    height: 10, // กำหนดความสูงของ dot
    borderRadius: 10, // ขอบ dot ให้โค้งมน
    backgroundColor: "#343334", // สีพื้นหลังของ dot
    marginHorizontal: 5, // ระยะห่างของแต่ละ dot
  },
  button: {
    backgroundColor: "#343334", // พื้นหลังของปุ่มเป็นสีดำ
    paddingVertical: 15, // ระยะห่างในแนวตั้งของปุ่ม
    paddingHorizontal: 100, // ระยะห่างในแนวนอนของปุ่ม
    borderRadius: 12, // ขอบปุ่มให้โค้งมน
    alignItems: "center", // จัดข้อความในปุ่มให้อยู่กลาง
    marginBottom: 40, // ระยะห่างจากปุ่ม NEXT ไปยังปุ่ม Skip
  },
  buttonText: {
    color: "white", // สีของข้อความในปุ่ม
    fontWeight: "bold", // ความหนาของข้อความในปุ่ม
    fontSize: 14, // ขนาดตัวอักษรในปุ่ม
    fontFamily: "Sen", // ฟอนต์ที่ใช้
  },
  skipButton: {
    alignItems: "center", // จัดข้อความในปุ่ม Skip ให้อยู่กลาง
  },
  skipText: {
    color: "#646982", // สีของข้อความในปุ่ม Skip
    fontSize: 16, // ขนาดตัวอักษรในปุ่ม Skip
    fontFamily: "Sen",
  },
});

export default Intro1;
