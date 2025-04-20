import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  ImageBackground,
} from "react-native";
import dayjs from "dayjs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const MonthlyTreeReward = ({
  loginDaysThisMonth = 0,
  hasClaimed = false,
  treeName,
  treeImage,
  requiredDays = 15,
  description,
  onClaimReward = () => {},
}) => {
  const [showModal, setShowModal] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [currentProgress] = useState(
    new Animated.Value((loginDaysThisMonth / requiredDays) * 100)
  );
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const today = dayjs();
    const endOfMonth = dayjs().endOf("month");
    const remainingDays = endOfMonth.diff(today, "day");
    setDaysLeft(remainingDays);

    const progress = loginDaysThisMonth / requiredDays;
    setIsCompleted(progress >= 1);

    Animated.timing(currentProgress, {
      toValue: Math.min(100, Math.max(0, progress * 100)),
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [loginDaysThisMonth, requiredDays, currentProgress]);

  const handleClaim = () => {
    setShowModal(true);
  };

  return (
    <ImageBackground
      source={require("../assets/bgDl.jpg")}
      style={styles.horizontalCard}
      imageStyle={styles.cardBackgroundImage}
    >
      {treeImage && (
        <Image source={treeImage} style={styles.treeImageHorizontal} />
      )}
      <View style={styles.cardInfo}>
        <Text style={styles.title}>{treeName}</Text>
        <Text style={styles.description}>
          {description} "{treeName}"
        </Text>

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
          {loginDaysThisMonth}/{requiredDays}
        </Text>
        <View style={styles.timeRow}>
          <AntDesign
            name="clockcircleo"
            size={14}
            color="#666"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.timeRemaining}>{daysLeft}</Text>
        </View>
        {isCompleted && (
          <TouchableOpacity
            style={[styles.claimButton, hasClaimed && styles.claimedButton]}
            disabled={hasClaimed}
            onPress={handleClaim}
          >
            <View style={styles.claimButtonContent}>
              <AntDesign
                name={hasClaimed ? "checkcircleo" : "gift"}
                size={18}
                color={hasClaimed ? "#fff" : "#fff"}
                style={{ marginRight: 0 }}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* Modal for reward */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        {/* ปุ่ม X */}
        <View style={styles.closeButton}>
          <TouchableOpacity
            style={styles.closeButtonS}
            onPress={() => setShowModal(false)}
          >
            <Ionicons name="close" size={28} color="#F2B501" />
          </TouchableOpacity>
        </View>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowModal(false)}
        >
          <Pressable
            style={styles.modalContainer}
            onPress={() => {}}
            onStartShouldSetResponder={() => true}
          >
            <Text style={styles.modalTitle}>คุณได้รับ {treeName}</Text>
            <Image source={treeImage} style={styles.modalImage} />

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowModal(false);
                onClaimReward();
              }}
            >
              <Text style={styles.modalButtonText}>ตกลง</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  horizontalCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardBackgroundImage: {
    borderRadius: 12,
  },
  treeImageHorizontal: {
    width: 120,
    height: 140,
    borderRadius: 20,
    marginRight: 16,
  },
  cardInfo: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: "#343334",
    fontFamily: "Mitr_Regular",
    marginBottom: 6,
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    fontFamily: "Mitr_Regular",
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
    maxWidth: "80%",
    alignSelf: "center",
  },
  progressBar: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 10,
    width: "100%",
    marginBottom: 6,
    overflow: "hidden",
  },
  progressText: {
    fontSize: 12,
    fontFamily: "Sen",
    color: "#7A6E5A",
    marginBottom: 4,
    textAlign: "right",
  },
  claimButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    backgroundColor: "#A7DB46",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 26,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "70%",
    backgroundColor: "#FFF9EC",
    padding: 24,
    borderRadius: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: "Mitr_Regular",
    color: "#343334",
    marginBottom: 14,
    textAlign: "center",
  },
  modalImage: {
    width: 150,
    height: 120,
    borderRadius: 20,
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 14,
    fontFamily: "Mitr_Regular",
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#FEC828",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: "#FEC828",
    shadowColor: "#FEC828",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  modalButtonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Mitr_Regular",
  },
  closeButton: {
    position: "absolute",
    top: 280,
    right: 40,
    zIndex: 10,
  },
  closeButtonS: {
    backgroundColor: "#fff9ec",
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },
  claimedButton: {
    borderColor: "#aaa",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#A4D96C",
    borderRadius: 8,
  },
  timeRow: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 6,
    backgroundColor: "#ffffff",
    paddingVertical: 6,
    borderRadius: 15,
  },
  timeRemaining: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Sen",
    marginLeft: 6,
  },
});

export default MonthlyTreeReward;
