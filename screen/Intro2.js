import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // นำเข้า useNavigation

const Intro2 = () => {
  const navigation = useNavigation(); // ใช้ useNavigation hook

  const goToNext = () => {
    navigation.navigate("Intro2"); // นำทางไปยังหน้า Intro2
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
      <TouchableOpacity style={styles.button} onPress={goToNext}>
        {" "}
        {/* เพิ่ม onPress */}
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
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  plantImage: {
    width: 300,
    height: 261,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    color: "#32343E",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#646982",
    marginBottom: 40,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#9B9B9B",
    marginHorizontal: 5,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#343334",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#343334",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Sen",
  },
  skipButton: {
    alignItems: "center",
  },
  skipText: {
    color: "#646982",
    fontSize: 16,
    fontFamily: "Sen",
  },
});

export default Intro2;
