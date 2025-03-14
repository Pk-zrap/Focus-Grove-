import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DailyLogin from "../components/DailyLogin";
import DailyChallengesList from "../components/DailyChallengesList";

const DailyChallenges = () => {
  return (
    <View style={styles.container}>
      <DailyLogin />
      {/* Title */}
      
      {/* Daily Challenges List */}
      <View style={styles.challengesList}>
      <Text style={styles.title}>กิจกรรมประจำวัน</Text>
        <DailyChallengesList
          achievementName="โฟกัสติดต่อกันอย่างน้อย 30 นาที"
          progress={0.3}
          imageUrl={require("../assets/Timer.jpeg")} // แก้ไขการใช้ require เพื่อโหลดรูปภาพ
        />
        <DailyChallengesList
          achievementName="ปลูกต้นไม้ 1 ต้น"
          progress={0.5}
          imageUrl={require("../assets/TreeA.jpeg")}
        />
        <DailyChallengesList
          achievementName="ปลูกต้นไม้ 3 ต้น"
          progress={0.7}
          imageUrl={require("../assets/TreeA.jpeg")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
    
  },
  challengesList: {
    marginTop: 30,

  },
});

export default DailyChallenges;
