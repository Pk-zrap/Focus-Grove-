import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import DailyLogin from "../components/DailyLogin";
import DailyChallengesList from "../components/DailyChallengesList";

const DailyChallenges = () => {
  const dailyChallenges = [
    {
      id: 1,
      challengeName: "ปลูกต้นไม้ให้ครบ 3 ต้น",
      current: 3,
      total: 3,
      imageUrl: require("../assets/TreeA.jpeg"),
      rewards: [
        {
          type: "coin",
          amount: 50,
          name: "NatureCoins",
          image: require("../assets/NatureCoins.png"),
        },
      ],
    },
    {
      id: 2,
      challengeName: "ฝึกสมาธิ 30 นาที",
      current: 15,
      total: 30,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดปริศนา",
          image: require("../assets/Intro/Intro2.png"),
        },
      ],
    },
    {
      id: 3,
      challengeName: "โฟกัสแท็ก 'งาน' ให้ครบ 30 นาที",
      current: 15,
      total: 30,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดงาน",
          image: require("../assets/Intro/Intro2.png"),
        },
      ],
    },
    {
      id: 4,
      challengeName: "สุ่มกาชา 1 ครั้ง",
      current: 0,
      total: 1,
      imageUrl: require("../assets/Intro/Intro2.png"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดปริศนา",
          image: require("../assets/Intro/Intro2.png"),
        },
      ],
    },
    {
      id: 5,
      challengeName: "ฝึกสมาธิ 3 ชั่วโมง",
      current: 15,
      total: 180,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดปริศนา",
          image: require("../assets/Intro/Intro2.png"),
        },
      ],
    },
    
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Daily Login */}
      <DailyLogin />
  
      {/* Daily Challenges List */}
      <View style={styles.challengesList}>
        <Text style={styles.title}>กิจกรรมประจำวัน</Text>
        {dailyChallenges.map((item) => (
          <DailyChallengesList
            key={item.id}
            challengeName={item.challengeName}
            current={item.current}
            total={item.total}
            imageUrl={item.imageUrl}
            rewards={item.rewards}
          />
        ))}
      </View>
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E8E8E8",
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#343334",
    fontFamily: "Mitr_Regular",    
  },
  challengesList: {
    marginTop: 20,
  },
  

});

export default DailyChallenges;
