import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DailyLogin = () => {
  const [loginStatus, setLoginStatus] = useState([false, false, false]);
  const [nextAvailableTime, setNextAvailableTime] = useState(null);

  const handleReceiveItem = (index) => {
    const currentTime = new Date().getTime();

    if (!nextAvailableTime || currentTime >= nextAvailableTime) {
      const newLoginStatus = [...loginStatus];
      newLoginStatus[index] = true;
      setLoginStatus(newLoginStatus);

      const nextTime = currentTime + 3 * 60 * 60 * 1000; // 3 ชั่วโมง
      setNextAvailableTime(nextTime);
    } else {
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "⏳ กรุณารออีก 3 ชั่วโมงก่อนที่จะรับไอเทมถัดไป",
          ToastAndroid.SHORT
        );
      }
    }
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
});

export default DailyLogin;
