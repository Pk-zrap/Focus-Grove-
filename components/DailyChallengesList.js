import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ใช้ไอคอนจาก Expo

const DailyChallengesList = ({ achievementName, progress, imageUrl }) => {
  const [currentProgress] = useState(new Animated.Value(progress * 100));
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(progress >= 1);
  }, [progress]);

  Animated.timing(currentProgress, {
    toValue: Math.min(100, Math.max(0, progress * 100)),
    duration: 800,
    useNativeDriver: false,
  }).start();

  return (
    <View style={styles.container}>
      {/* Achievement Image */}
      {imageUrl && (
        <Image
          source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
          style={styles.achievementImage}
        />
      )}

      {/* Text & Progress Bar */}
      <View style={styles.textContainer}>
        <Text style={styles.achievementName}>{achievementName}</Text>
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: currentProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
      </View>

      {/* Achievement Button */}
      <TouchableOpacity
        style={[styles.rightButton, isCompleted ? styles.completedButton : null]}
        onPress={() => alert(`Achievement ${isCompleted ? "Completed!" : "Clicked!"}`)}
      >
        {isCompleted ? (
          <Ionicons name="cube" size={24} color="#fff" />
        ) : (
          <Ionicons name="cube-outline" size={24} color="#ffcc00" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  achievementImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#D9D9D9",
  },
  textContainer: {
    flex: 1,
  },
  achievementName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginTop: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
  progressText: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  rightButton: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ffcc00",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  completedButton: {
    backgroundColor: "#FEC828",
    borderColor: "#FEC828",
  },
});

export default DailyChallengesList;

