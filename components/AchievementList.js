import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const AchievementList = ({ achievementName, current, total, imageUrl }) => {
  const progress = current / total;
  const [currentProgress] = useState(new Animated.Value(progress * 100));
  const [isCompleted, setIsCompleted] = useState(false);
  const [isGetItem, setGetItem] = useState(false);

  // เมื่อ progress เปลี่ยนแปลง
  useEffect(() => {
    setIsCompleted(progress >= 1);

    // อัปเดต currentProgress ทุกครั้งที่ progress เปลี่ยนแปลง
    Animated.timing(currentProgress, {
      toValue: Math.min(100, Math.max(0, progress * 100)),
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const handleButtonPress = () => {
    // แสดงเมื่อ achievement สำเร็จ
    if (isCompleted) {
      setGetItem(true); // เมื่อ achievement สำเร็จ จะเปิด popup
    } else {
      alert("Achievement Incomplete!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Achievement Image */}
      {imageUrl && (
        <Image
          source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
          style={styles.achievementImage}
        />
      )}

      {/* Text & Progress Bar */}
      <View style={styles.textContainer}>
        <Text style={styles.achievementName}>{achievementName}</Text>
          <View style={styles.progressBar}>
            <Animated.View
              style={[
                styles.progressFill,
                { width: currentProgress.interpolate({ inputRange: [0, 100], outputRange: ["0%", "100%"] }) },
              ]}
            />
          </View>
        <Text style={styles.progressText}>{current}/{total}</Text>
      </View>

      {/* Achievement Button */}
      <TouchableOpacity
        disabled={!isCompleted}
        style={[
          styles.rightButton,
          isCompleted ? styles.completedButton : styles.disabledButton,
        ]}
        onPress={handleButtonPress}
      >
        {isCompleted ? (
          <Ionicons name="trophy" size={24} color="#fff" />
        ) : (
          <Ionicons name="trophy-outline" size={24} color="#FEC828" />
        )}
      </TouchableOpacity>

      {/* GetItem */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isGetItem} // เปลี่ยนจาก isModalVisible เป็น isGetItem
        onRequestClose={() => setGetItem(false)} // ปิด Modal เมื่อกดออก
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>คุณได้รับไอเทมแล้ว!</Text>
            <Image
              source={require("../assets/Exchange.jpeg")}
              style={styles.coinImage}
            />
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setGetItem(false)} // ปิด
            >
              <Text style={styles.modalButtonText}>ตกลง</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFCF3",
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  achievementImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#D9D9D9",
  },
  textContainer: {
    flex: 1,
  },
  achievementName: {
    fontSize: 16,
    color: "#343334",
    fontFamily: "Mitr_Regular",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginTop: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  progressText: {
    fontFamily: "Sen",
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  rightButton: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffcc00",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  completedButton: {
    backgroundColor: "#FEC828", 
    borderColor: "#FEC828",
  },
  disabledButton: {
    borderColor: "#FEC828",
    backgroundColor: "#FFFCF3",
  },

  // Modal Styles
modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker overlay for better contrast
},
modalContent: {
  width: "70%",
  padding: 25,
  backgroundColor: "#fff",
  borderRadius: 20,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 15,
  elevation: 10, 
},
modalText: {
    fontFamily: "Mitr_Regular",
  fontSize: 16,
  color: "#333",
  marginBottom: 15,
},
modalButton: {
  paddingVertical: 12,
  paddingHorizontal: 30,
  backgroundColor: "#FEC828",
  borderRadius: 30,
  borderWidth: 1,
  borderColor: "#FEC828",
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 5,
},
modalButtonText: {
  fontSize: 16,
  color: "#fff",
  fontWeight: "500",
  fontFamily: "Mitr_Regular",
},
coinImage: {
  width: 90,
  height: 90,
  borderRadius: 20,
  marginBottom: 20,
  borderWidth: 2,
  borderColor: "#D9D9D9",
},

});

export default AchievementList;
