import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NewList = ({ date, type, imageUrl, title }) => {
  return (
    <View style={styles.container}>
      {/* รูปภาพโปรโมท */}
      <Image source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl} style={styles.image} />

      {/* ข้อมูลข่าวสาร */}
      <View style={styles.infoContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.typeBadge, type === "Event" ? styles.eventBadge : styles.newsBadge]}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4, // สำหรับ Android
    alignItems: "center",
  },
  image: {
    width: 100,  // ขยายขนาดรูปภาพ
    height: 100,
    borderRadius: 15, // ทำให้ภาพโค้งมนขึ้น
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  typeBadge: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 6,
  },
  eventBadge: {
    backgroundColor: "#FF5733",
  },
  newsBadge: {
    backgroundColor: "#3498db",
  },
  typeText: {
    fontSize: 13,
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18, // ปรับให้ใหญ่ขึ้น
    fontWeight: "bold",
    color: "#333",
  },
});

export default NewList;
