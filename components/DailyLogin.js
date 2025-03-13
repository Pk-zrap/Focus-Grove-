import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const DailyLogin = () => {
  // สร้างข้อมูลภาพตัวอย่างและสถานะการล็อคอิน
  const [loginStatus, setLoginStatus] = useState([false, false, false]);
  const [nextAvailableTime, setNextAvailableTime] = useState(null); // เวลาถัดไปที่สามารถรับได้

  // ฟังก์ชันสำหรับการรับไอเทม
  const handleReceiveItem = (index) => {
    // เช็คว่าเมื่อไหร่สามารถรับได้ (เช็คว่าเวลาที่เก็บไว้ครบ 3 ชั่วโมงหรือไม่)
    const currentTime = new Date().getTime();

    if (!nextAvailableTime || currentTime >= nextAvailableTime) {
      const newLoginStatus = [...loginStatus];
      newLoginStatus[index] = true;
      setLoginStatus(newLoginStatus);
      // เก็บเวลาถัดไปที่สามารถรับไอเทมได้ (3 ชั่วโมงจากเวลาปัจจุบัน)
      const nextTime = currentTime + 3 * 60 * 60 * 1000; // 3 ชั่วโมง
      setNextAvailableTime(nextTime);
    } else {
      alert("กรุณารออีก 3 ชั่วโมงก่อนที่จะรับไอเทมถัดไป");
    }
  };

  useEffect(() => {
    // เช็คเวลาเมื่อ component ถูก mount เพื่ออัปเดตสถานะการรับไอเทม
    const currentTime = new Date().getTime();
    if (nextAvailableTime && currentTime >= nextAvailableTime) {
      setNextAvailableTime(null); // สามารถรับไอเทมถัดไปได้แล้ว
    }
  }, [nextAvailableTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>กิจกรรมล็อคอินประจำวัน</Text>
      <View style={styles.itemsContainer}>
        {loginStatus.map((status, index) => (
          <View key={index} style={styles.item}>
            <Image
              source={status ? require("../assets/Exchange.jpeg") : require("../assets/Exchange.jpeg")}
              style={styles.image}
            />
            <TouchableOpacity
              style={[styles.receiveButton, status && styles.receivedButton]}
              onPress={() => handleReceiveItem(index)}
              disabled={status} // ปิดการใช้งานปุ่มหากได้รับแล้ว
            >
              <Text style={styles.buttonText}>{status ? "รับแล้ว" : "รับไอเทม"}</Text>
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
    borderWidth: 2, 
    borderColor: "#D3D9E3",
    borderRadius:12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
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
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius:12
  },
  receiveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  receivedButton: {
    backgroundColor: "#A5D6A7",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  timerText: {
    fontSize: 14,
    marginTop: 2,
    color: "#888",
  },
});

export default DailyLogin;
