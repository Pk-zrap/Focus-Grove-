import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AchievementList from "../components/AchievementList";

const achievements = [
  { name: "ปลูกเมล็ดต้นไม้แรก", progress: 0.3, image: require("../assets/TreeA.jpeg") },
  { name: "ปลูกต้นไม้ครบ 10 ต้น", progress: 0.6, image: require("../assets/TreeA.jpeg") },
  { name: "โฟกัสติดต่อกัน 30 นาที", progress: 1.0, image: require("../assets/Timer.jpeg") },
  { name: "โฟกัสติดต่อกัน 1 ชั่วโมง", progress: 0.4, image: require("../assets/Timer.jpeg") },
  { name: "โฟกัสต่อเนื่องเป็นเวลา 2 ชั่วโมง", progress: 0.5, image: require("../assets/Timer.jpeg") },
  { name: "ใช้ไอเทมพิเศษเพื่อเพิ่มเหรียญจากการปลูก 5 ครั้ง", progress: 1.0, image: require("../assets/TreeA.jpeg") },
  { name: "ปลูกต้นไม้ระดับ Legendary", progress: 0.7, image: require("../assets/TreeA.jpeg") },
  { name: "โฟกัสครบ 10 ชั่วโมง", progress: 0.8, image: require("../assets/Timer.jpeg") },
  { name: "ต้นไม้เต็มวัย", progress: 1.0, image: require("../assets/TreeA.jpeg") },
  { name: "ปลูกต้นไม้ระดับ Legendary และโฟกัสติดต่อกัน 3 ชั่วโมง", progress: 0.4, image: require("../assets/TreeA.jpeg") },
];

const Achievement = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {achievements.map((achieve, index) => (
          <AchievementList 
            key={index}
            achievementName={achieve.name}
            progress={achieve.progress}
            imageUrl={achieve.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
});

export default Achievement;
