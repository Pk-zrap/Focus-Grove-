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

const DailyChallengesList = ({ challengeName, current, total, rewards, imageUrl }) => {
  const progress = current / total;
  const [currentProgress] = useState(new Animated.Value(progress * 100));
  const [isCompleted, setIsCompleted] = useState(false);
  const [isGetItem, setGetItem] = useState(false);
  const [hasClaimed, setHasClaimed] = useState(false);

  useEffect(() => {
    setIsCompleted(progress >= 1);
    Animated.timing(currentProgress, {
      toValue: Math.min(100, Math.max(0, progress * 100)),
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const handleButtonPress = () => {
    if (isCompleted) {
      setGetItem(true);
    } else {
      alert("ยังทำไม่ครบเงื่อนไข!");
    }
  };

  const handleConfirm = () => {
    setHasClaimed(true);
    setGetItem(false);
  };


  return (
    <View style={styles.container}>
      {/* DailyChallenges Image */}
      {imageUrl && (
        <Image
          source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
          style={styles.challengeImage}
        />
      )}

      {/* Text & Progress */}
      <View style={styles.textContainer}>
        <Text style={styles.challengeName}>{challengeName}</Text>
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

      {/* Claim Button */}
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
          <Ionicons name="gift" size={24} color="#fff" />
        ) : (
          <Ionicons name="gift-outline" size={24} color="#FEC828" />
        )}
      </TouchableOpacity>

      {/* Reward Modal */}
      <Modal
        visible={isGetItem}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setGetItem(false)}
      >
        <View style={styles.closeButton}>
          <TouchableOpacity
            style={styles.closeButtonS}
            onPress={() => setGetItem(false)}
          >
            <Ionicons name="close" size={28} color="#F2B501" />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>คุณได้รับรางวัล</Text>

            <View style={{ flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
              {rewards.map((reward, index) => (
                <View key={index} style={{ alignItems: "center", marginHorizontal: 10 }}>
                  {reward.image && (
                    <Image
                      source={typeof reward.image === "string" ? { uri: reward.image } : reward.image}
                      style={styles.coinImage}
                    />
                  )}
                </View>
              ))}
            </View>

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

            <TouchableOpacity style={styles.modalButton} onPress={handleConfirm}>
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
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  challengeImage: {
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
  challengeName: {
    fontSize: 14,
    marginBottom: 2,
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
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  rightButton: {
    padding: 8,
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
  claimedButton: {
    backgroundColor: "#aaa",
    borderColor: "#aaa",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
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
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    color: "#fff",
  },
  rewardText: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Mitr_Regular",
    textAlign: "center",
    marginBottom: 4,
  },
  coinImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  closeButton: {
    position: "absolute",
    top: 300,
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
  
});

export default DailyChallengesList;
