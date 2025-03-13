import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Intro1 = () => {
  // สร้างตัวแปร navigation ที่ใช้ในการนำทางระหว่างหน้า
  const navigation = useNavigation();

  // ฟังก์ชันที่ใช้ในการนำทางเมื่อกดปุ่ม NEXT
  const goToNext = () => {
    // ใช้ฟังก์ชัน navigate เพื่อนำทางไปยังหน้า Intro2
    navigation.navigate("Intro2");
  };

  // ฟังก์ชันสำหรับนำทางไปหน้า Home เมื่อกดปุ่ม Skip
  const goToHome = () => {
    navigation.navigate("DrawerNavigator");
  };

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
        {/* แสดงข้อความ Title */}
      </View>

      {/* ส่วนของข้อความ Subtitle */}
      <Text style={styles.subtitle}>
        เริ่มต้นการเดินทางแห่งการโฟกัสของคุณปลูกต้นไม้แห่งสมาธิและเติบโตไปพร้อมกัน
      </Text>
      {/* แสดงข้อความ Subtitle */}

      {/* ส่วนของ Dot Indicators (ก่อนปุ่ม NEXT) */}
      <View style={styles.dotsContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      {/* แสดง dot indicators สำหรับแสดงตำแหน่งปัจจุบัน */}

      {/* ปุ่ม NEXT */}
      <TouchableOpacity style={styles.button} onPress={goToNext}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>

      {/* ปุ่ม Skip */}
      <TouchableOpacity style={styles.skipButton} onPress={goToHome}>
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
    fontSize: 24, // ขนาดตัวอักษรของ title
    color: "#32343E", // สีของข้อความ
    fontWeight: "bold", // ความหนาของข้อความ
  },
  subtitle: {
    fontSize: 16, // ขนาดตัวอักษรของ subtitle
    textAlign: "center", // จัดข้อความให้อยู่กลาง
    color: "#646982", // สีของข้อความ
    marginBottom: 40, // ระยะห่างจาก Subtitle ไปยังปุ่ม NEXT
  },
  dotsContainer: {
    flexDirection: "row", // จัดให้อยู่ในแนวนอน
    marginBottom: 40, // ระยะห่างจาก dots ไปยังปุ่ม NEXT
  },
  dot: {
    width: 10, // ขนาดของ dot
    height: 10, // ขนาดของ dot
    borderRadius: 10, // ขอบของ dot ให้โค้งมน
    backgroundColor: "#9B9B9B", // สีของ dot
    marginHorizontal: 5, // ระยะห่างระหว่าง dot
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#343334", // สีของ dot ที่เป็นสถานะ active
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#343334", // สีพื้นหลังของปุ่ม
    paddingVertical: 15, // ระยะห่างในแนวตั้งของปุ่ม
    paddingHorizontal: 100, // ระยะห่างในแนวนอนของปุ่ม
    borderRadius: 12, // ขอบปุ่มให้โค้งมน
    alignItems: "center", // จัดข้อความในปุ่มให้อยู่กลาง
    marginBottom: 40, // ระยะห่างจากปุ่ม NEXT ไปยังปุ่ม Skip
  },
  buttonText: {
    color: "white", // สีข้อความในปุ่ม
    fontWeight: "bold", // ความหนาของข้อความในปุ่ม
    fontSize: 14, // ขนาดตัวอักษรในปุ่ม
    fontFamily: "Sen", // ฟอนต์ที่ใช้ในปุ่ม
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
