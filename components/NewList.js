import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const NewList = ({ date, type, imageUrl, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <Image source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={[styles.typeBadge, type === "Event" ? styles.eventBadge : styles.newsBadge]}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: "95%",

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: "#eee",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
    fontFamily: "Mitr_Regular",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    fontFamily: "Mitr_Regular",
  },
  typeBadge: {
    alignSelf: "flex-start",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  eventBadge: {
    backgroundColor: "#6F96",   
  },
  newsBadge: {
    backgroundColor: "#AED9E0",
  },
  typeText: {
    fontSize: 13,
    color: "#333",
    fontWeight: "bold",
  },
});

export default NewList;
