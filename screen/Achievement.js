import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import AchievementList from "../components/AchievementList";

const achievements = [
  {
    name: "ปลูกเมล็ดต้นไม้แรก",
    current: 1,
    total: 1,
    image: require("../assets/TreeA.jpeg"),
    rewards: [
      { type: "coin", amount: 5, image: require("../assets/NatureCoins.png") },
      {
        type: "seed",
        name: "Common 1 เมล็ด",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "ปลูกต้นไม้ครบ 10 ต้น",
    current: 6,
    total: 10,
    image: require("../assets/TreeA.jpeg"),
    rewards: [
      { type: "coin", amount: 10, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Uncommon",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "โฟกัสติดต่อกัน 30 นาที",
    current: 1,
    total: 1,
    image: require("../assets/Timer.jpeg"),
    rewards: [
      { type: "coin", amount: 10, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Uncommon",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "โฟกัสติดต่อกัน 1 ชั่วโมง",
    current: 0,
    total: 1,
    image: require("../assets/Timer.jpeg"),
    rewards: [
      { type: "coin", amount: 15, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "เมล็ด Rare 1 เมล็ด",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "โฟกัสต่อเนื่องเป็นเวลา 2 ชั่วโมง",
    current: 1,
    total: 2,
    image: require("../assets/Timer.jpeg"),
    rewards: [
      { type: "coin", amount: 20, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Uncommon",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "ใช้ไอเทมพิเศษเพื่อเพิ่มเหรียญจากการปลูก 5 ครั้ง",
    current: 5,
    total: 5,
    image: require("../assets/TreeA.jpeg"),
    rewards: [
      { type: "coin", amount: 25, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Epic",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "ปลูกต้นไม้ระดับ Legendary",
    current: 0,
    total: 1,
    image: require("../assets/TreeA.jpeg"),
    rewards: [
      { type: "coin", amount: 20, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Rare",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "โฟกัสครบ 10 ชั่วโมง",
    current: 8,
    total: 10,
    image: require("../assets/Timer.jpeg"),
    rewards: [
      { type: "coin", amount: 30, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Epic",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "ต้นไม้โตเต็มวัย",
    current: 1,
    total: 1,
    image: require("../assets/TreeA.jpeg"),
    rewards: [
      { type: "coin", amount: 10, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "เมล็ด Uncommon",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
  {
    name: "ปลูกต้นไม้ระดับ Legendary และโฟกัสติดต่อกัน 3 ชั่วโมง",
    current: 3,
    total: 3,
    image: require("../assets/TreeA.jpeg"),
    rewards: [
      { type: "coin", amount: 30, image: require("../assets/NatureCoins.png") },
      {
        type: "box",
        name: "กล่องสุ่มเมล็ด Legendary",
        amount: 1,
        image: require("../assets/Box.png"),
      },
    ],
  },
];

const Achievement = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.yellowTopSection}>
        <View style={styles.titleH}>
        <Text style={styles.title}>ปลดล็อกความสำเร็จต่าง ๆ เพื่อกลายเป็น</Text>
        <Text style={styles.title}>นักสร้างป่าตัวจริง!!</Text>
        </View>
      </View>

      <View style={styles.containerAchievement}>
        <View style={styles.challengesList}>
          {achievements.map((achieve, index) => (
            <AchievementList
              key={index}
              achievementName={achieve.name}
              current={achieve.current}
              total={achieve.total}
              imageUrl={achieve.image}
              rewards={achieve.rewards}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
  },
  titleH:{
    paddingTop: 10,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Mitr_Regular",
  },
  containerAchievement: {
    padding: 20,
  },
  challengesList: {
    marginTop: 0,
  },
  yellowTopSection: {
    backgroundColor: "#F2B501",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default Achievement;
