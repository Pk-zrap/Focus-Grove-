import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Intro4 = () => {
  // สร้างตัวแปร navigation ที่ใช้ในการนำทางระหว่างหน้า
  const navigation = useNavigation();

  // ฟังก์ชันที่ใช้ในการนำทางเมื่อกดปุ่ม NEXT
  const goToNext = () => {
    // ใช้ฟังก์ชัน navigate เพื่อนำทางไปยังหน้า Intro2
    navigation.navigate("DrawerNavigator");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Intro/Intro4.png")}
          style={styles.plantImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>ยินดีต้อนรับสู่ Focus Grove!</Text>
        <Text style={styles.subtitle}>
          เริ่มต้นการเดินทางสู่สมาธิและความสำเร็จของคุณ
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dotActive} />
        </View>

        <TouchableOpacity style={styles.button} onPress={goToNext}>
          <Icon name="chevron-forward-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#E8E8E8",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  plantImage: {
    width: 395,
    height: 395,
  },
  textContainer: {
    alignItems: "center",
    height: 190,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#32343E",
    fontFamily: "Mitr_Semibold",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#646982",
    marginBottom: 40,
    fontFamily: "Mitr_Regular",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 2,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
});

export default Intro4;
