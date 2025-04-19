import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DailyLogin = () => {
  const [loginStatus, setLoginStatus] = useState([false, false, false]);
  const [nextAvailableTime, setNextAvailableTime] = useState(null);
  const [isGetItem, setGetItem] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleReceiveItem = (index) => {
    const currentTime = new Date().getTime();

    if (!nextAvailableTime || currentTime >= nextAvailableTime) {
      // ยังไม่อัปเดต loginStatus ทันที
      setSelectedIndex(index);

      const todayReward = [
        {
          type: "coin",
          name: "Nature Coin",
          amount: 50,
          image: require("../assets/NatureCoins.png"),
        },
      ];
      setRewards(todayReward);
      setGetItem(true);
    } else {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "⏳กรุณารออีก 3 ชั่วโมง ก่อนที่จะรับไอเทมถัดไป",
          ToastAndroid.SHORT
        );
      }
    }
  };

  const handleConfirm = () => {
    if (selectedIndex !== null) {
      const newLoginStatus = [...loginStatus];
      newLoginStatus[selectedIndex] = true;
      setLoginStatus(newLoginStatus);

      const currentTime = new Date().getTime();
      const nextTime = currentTime + 3 * 60 * 60 * 1000;
      setNextAvailableTime(nextTime);
    }

    setSelectedIndex(null); // reset
    setGetItem(false);
    setRewards([]); // reset รางวัล
  };

  const handleCancel = () => {
    setSelectedIndex(null);
    setGetItem(false);
    setRewards([]);
  };

  useEffect(() => {
    const currentTime = new Date().getTime();
    if (nextAvailableTime && currentTime >= nextAvailableTime) {
      setNextAvailableTime(null);
    }
  }, [nextAvailableTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>กิจกรรมล็อคอินประจำวัน</Text>
      <View style={styles.itemsContainer}>
        {loginStatus.map((status, index) => (
          <View key={index} style={styles.item}>
            <Image
              source={require("../assets/NatureCoins.png")}
              style={styles.image}
            />
            <TouchableOpacity
              style={[styles.receiveButton, status && styles.receivedButton]}
              onPress={() => handleReceiveItem(index)}
              disabled={status}
            >
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={status ? "#9B9B9B" : "#61A858"}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {nextAvailableTime && (
        <Text style={styles.timerText}>
          คุณสามารถรับไอเทมถัดไปได้ใน{" "}
          {new Date(nextAvailableTime).toLocaleTimeString()}
        </Text>
      )}

      {/* MODAL: แสดงรางวัลที่ได้รับ */}
      <Modal
  visible={isGetItem}
  transparent={true}
  animationType="fade"
  onRequestClose={handleCancel}
>
  <View style={styles.modalContainer}>
    <View style={styles.closeButton}>
      <TouchableOpacity style={styles.closeButtonS} onPress={handleCancel}>
        <Ionicons name="close" size={28} color="#F2B501" />
      </TouchableOpacity>
    </View>

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
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    color: "#343334",
    fontFamily: "Mitr_Regular",
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  item: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 12,
  },
  receiveButton: {
    backgroundColor: "#A7DB46",
    paddingVertical: 1,
    paddingHorizontal: 1,
    borderRadius: 25,
  },
  receivedButton: {
    backgroundColor: "#D3D9E3",
    paddingVertical: 1,
    paddingHorizontal: 1,
    borderRadius: 25,
  },
  timerText: {
    fontSize: 12,
    fontFamily: "Mitr_Regular",
    marginTop: 8,
    color: "#888",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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

export default DailyLogin;
