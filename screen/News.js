import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import NewList from "../components/NewList";

const News = () => {
  const newsData = [
    { id: "1", date: "14 มี.ค. 2025", type: "Event", imageUrl: require("../assets/Season of Bloom.jpeg"), title: "ฤดูแห่งการผลิบาน (Season of Bloom) 🌸" },
    { id: "1", date: "15 มี.ค. 2025", type: "Event", imageUrl: require("../assets/Time Rift Lootbox.jpeg"), title: "กาชาแห่งมิติเวลา (Time Rift Lootbox) ⏳🎁" },
    { id: "1", date: "16 มี.ค. 2025", type: "ข่าวสาร", imageUrl: require("../assets/Exchange.jpeg"), title: "ระบบแลกเปลี่ยนเหรียญมาแล้ว! (Exchange System Update) 💰🔄" },

  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {newsData.map((item) => (
          <NewList key={item.id} date={item.date} type={item.type} imageUrl={item.imageUrl} title={item.title} />
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
    paddingBottom: 20,
  },
});

export default News;
