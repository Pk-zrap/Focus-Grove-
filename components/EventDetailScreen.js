import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EventDetailScreen = ({ route }) => {
  const { date, type, imageUrl, title } = route.params; // รับข้อมูลจาก NewList

  return (
    <View style={styles.container}>
      <Image
        source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.type}>{type}</Text>
      {/* เพิ่มเนื้อหารายละเอียดเพิ่มเติมตามที่ต้องการ */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default EventDetailScreen;
