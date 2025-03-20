import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Intro2 = () => {
  const navigation = useNavigation();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const goToNext = () => {
    navigation.navigate("Intro3");
  };

  const goToHome = () => {
    setShowConfirmation(true);
  };

  const confirmSkip = () => {
    navigation.navigate("DrawerNavigator");
    setShowConfirmation(false);
  };

  const cancelSkip = () => {
    setShowConfirmation(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Intro2-2.png")}
          style={styles.plantImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>เลือกเมล็ดพันธุ์</Text>
      </View>

      <Text style={styles.subtitle}>
        เลือกเมล็ดพันธุ์ที่คุณชื่นชอบ เริ่มต้นการโฟกัสและเฝ้าดูการเติบโต
      </Text>

      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.button} onPress={goToNext}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipButton} onPress={goToHome}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {showConfirmation && (
        <View style={styles.confirmationContainer}>
          <View style={styles.confirmationBox}>
            <Text style={styles.confirmationTitle}>คำแนะนำ</Text>
            <Text style={styles.confirmationMessage}>
              เหลือ 2 หน้าแล้วอ่านหน่อย
            </Text>
            <View style={styles.confirmationButtons}>
              <TouchableOpacity
                style={styles.confirmationButton}
                onPress={cancelSkip}
              >
                <Text style={styles.confirmationButtonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmationButton}
                onPress={confirmSkip}
              >
                <Text style={styles.confirmationButtonText}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
    width: 382,
    height: 404,
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
  confirmationContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmationBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  confirmationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  confirmationMessage: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    color: "#9B9B9B",
  },
  confirmationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  confirmationButton: {
    backgroundColor: "#343334",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  confirmationButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Intro2;
