import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

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
      <TouchableOpacity style={styles.skipButton} onPress={goToHome}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Intro/Intro2.png")}
          style={styles.plantImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>เริ่มต้นการโฟกัส</Text>
        <Text style={styles.subtitle}>
          เริ่มต้นการเดินทางแห่งการโฟกัสของคุณปลูกต้นไม้แห่งสมาธิและเติบโตไปพร้อมกัน
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.button} onPress={goToNext}>
          <Icon name="chevron-forward-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {showConfirmation && (
        <View style={styles.confirmationContainer}>
          <View style={styles.confirmationBox}>
            <Text style={styles.confirmationTitle}>คำแนะนำ</Text>
            <View style={styles.confirmationBoxMessage}>
              <Text style={styles.confirmationMessage}>
                แค่ 4 หน้าก็อ่านให้กันไม่ได้หรอ เสียดายแย่เลย
              </Text>
            </View>

            <View style={styles.confirmationButtons}>
              <TouchableOpacity
                style={styles.confirmationButtonCancel}
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
    padding: 25,
    backgroundColor: "#E8E8E8",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
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
  skipButton: {
    alignItems: "flex-end", // Align to the right
    width: "100%",
    marginBottom: 20,
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
    borderRadius: 18,
    width: "85%",
  },
  confirmationBoxMessage: {
    height: 100,
    borderWidth: 1,
    borderColor: "#9B9B9B",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  confirmationTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Mitr_Regular",
    textAlign: "center",
  },
  confirmationMessage: {
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "Mitr_Regular",
    textAlign: "center",
    color: "#9B9B9B",
  },
  confirmationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  confirmationButton: {
    backgroundColor: "#F2B501",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  confirmationButtonCancel: {
    borderWidth: 1,
    borderColor: "#9B9B9B",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  confirmationButtonText: {
    color: "#343334",
    fontFamily: "Mitr_Regular",
  },
});

export default Intro2;
