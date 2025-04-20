import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const AchievementList = ({
  achievementName,
  current,
  total,
  imageUrl,
  rewards,
}) => {
  const progress = current / total;
  const [currentProgress] = useState(new Animated.Value(progress * 100));
  const [isCompleted, setIsCompleted] = useState(false);
  const [isGetItem, setGetItem] = useState(false);
  const [hasClaimed, setHasClaimed] = useState(false);

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

  const handleConfirm = () => {
    setHasClaimed(true);
    setGetItem(false); // ปิด popup
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
              {
                width: currentProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {current}/{total}
        </Text>
      </View>

      {/* Achievement Button */}
      <TouchableOpacity
        disabled={!isCompleted || hasClaimed}
        style={[
          styles.rightButton,
          hasClaimed
            ? styles.claimedButton
            : isCompleted
            ? styles.completedButton
            : styles.disabledButton,
        ]}
        onPress={handleButtonPress}
      >
        {hasClaimed ? (
          <Ionicons name="checkmark-circle" size={24} color="#fff" />
        ) : isCompleted ? (
          <Ionicons name="trophy" size={24} color="#fff" />
        ) : (
          <Ionicons name="trophy-outline" size={24} color="#FEC828" />
        )}
      </TouchableOpacity>

      {/* Modal for item received */}
      <Modal
        visible={isGetItem}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setGetItem(false)}
      >
        {/* ปุ่ม X คงไว้ */}
        <View style={styles.closeButton}>
          <TouchableOpacity
            style={styles.closeButtonS}
            onPress={() => setGetItem(false)}
          >
            <Ionicons name="close" size={28} color="#F2B501" />
          </TouchableOpacity>
        </View>

        {/* Pressable รอบนอก */}
        <Pressable
          style={styles.modalContainer}
          onPress={() => setGetItem(false)}
        >
          {/* Pressable รอบเนื้อหา (กันไม่ให้ปิด modal เมื่อกดเนื้อหา) */}
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <Text style={styles.modalText}>คุณได้รับรางวัล</Text>
            <View style={{ alignItems: "center", width: "100%" }}>
              {/* Reward Images */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: 5,
                }}
              >
                {rewards.map((reward, index) => (
                  <View
                    key={index}
                    style={{ alignItems: "center", marginHorizontal: 10 }}
                  >
                    {reward.image && (
                      <Image
                        source={
                          typeof reward.image === "string"
                            ? { uri: reward.image }
                            : reward.image
                        }
                        style={styles.coinImage}
                      />
                    )}
                  </View>
                ))}
              </View>

              {/* Reward Names */}
              <View style={{ marginTop: 10 }}>
                {rewards.map((reward, index) => {
                  let symbol = "🎁";
                  switch (reward.type) {
                    case "coin":
                      symbol = "🪙";
                      break;
                    case "seed":
                      symbol = "🌱";
                      break;
                    case "box":
                      symbol = "🎁";
                      break;
                    default:
                      symbol = "🎉";
                  }

                  return (
                    <Text key={index} style={styles.rewardText}>
                      {reward.name
                        ? `${symbol} ${reward.name} x ${reward.amount}`
                        : `${symbol} x ${reward.amount}`}
                    </Text>
                  );
                })}
              </View>
            </View>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleConfirm}
            >
              <Text style={styles.modalButtonText}>ตกลง</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // Achievement Container styles
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
    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    color: "#343334",
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
    marginTop: 10,
  },
  modalButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Mitr_Regular",
  },
  claimedButton: {
    backgroundColor: "#9B9B9B",
    borderColor: "#D3D9E3",
    opacity: 0.7,
    borderRadius: 8,
  },
  closeButton: {
    position: "absolute",
    top: 260,
    right: 40,
    zIndex: 2,
  },
  closeButtonS: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  coinImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
    marginBottom: 20,
    marginBottom: 5,
  },
  rewardText: {
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    color: "#343434",
    marginBottom: 5,
    textAlign: "center",
  },
});

export default AchievementList;
