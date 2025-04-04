import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const treeImages = [
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/icon.png"),
  require("../assets/favicon.png"),
];

const tagOptions = [
  { name: "การเรียน", color: "blue" },
  { name: "ทำงาน", color: "green" },
  { name: "พักผ่อน", color: "purple" },
];

const BottomSheetOptions = ({
  closeBottomSheet,
  setSelectedTree,
  setSelectedTime,
  setSelectedTag,
  setTimeRemaining,
  setIsPlanting,
}) => {
  const [selectedLocalTree, setSelectedLocalTree] = useState(null);
  const [selectedLocalTime, setSelectedLocalTime] = useState(null);
  const [selectedLocalTag, setSelectedLocalTag] = useState(null);
  const [isPlantingLocal, setIsPlantingLocal] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (isPlantingLocal && selectedLocalTime > 0) {
      setCountdown(selectedLocalTime * 60);
    } else {
      setCountdown(0);
    }
  }, [isPlantingLocal, selectedLocalTime]);

  useEffect(() => {
    let interval;
    if (isPlantingLocal && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && isPlantingLocal) {
      setIsPlanting(false);
      setIsPlantingLocal(false);
      closeBottomSheet();
    }
    return () => clearInterval(interval);
  }, [isPlantingLocal, countdown, closeBottomSheet, setIsPlanting]);

  const handleTreeSelect = useCallback((tree) => {
    setSelectedLocalTree(tree);
    console.log("Tree selected:", tree);
  }, []);

  const handleTimeSelect = useCallback((time) => {
    setSelectedLocalTime(time);
    console.log("Time selected:", time);
  }, []);

  const handleTagSelect = useCallback((tag) => {
    setSelectedLocalTag(tag);
    console.log("Tag selected:", tag);
  }, []);

  const handlePlant = useCallback(() => {
    if (selectedLocalTree && selectedLocalTime && selectedLocalTag) {
      setSelectedTree(selectedLocalTree);
      setSelectedTime(selectedLocalTime);
      setSelectedTag(selectedLocalTag);
      setIsPlanting(true);
      setIsPlantingLocal(true);
      setTimeRemaining(selectedLocalTime * 60);
    } else {
      alert("กรุณาเลือก ต้นไม้, เวลา, และแท็ก ก่อนกดปุ่มปลูก");
    }
  }, [
    selectedLocalTree,
    selectedLocalTime,
    selectedLocalTag,
    setSelectedTree,
    setSelectedTime,
    setSelectedTag,
    setIsPlanting,
    setIsPlantingLocal,
    setTimeRemaining,
  ]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
      {/* Tree selection */}
      <Text style={styles.title}>เลือกต้นไม้</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
        {treeImages.map((tree, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTreeSelect(tree)}
            style={[
              styles.treeOption,
              selectedLocalTree === tree && styles.selectedOption, // Apply selectedOption style for selected tree
              selectedLocalTree === tree && { borderColor: 'green' }, // Apply green border for selected tree only
            ]}
          >
            <Image source={tree} style={styles.treeImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Time selection */}
      <Text style={styles.title}>เลือกเวลา (นาที)</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
        {[...Array(35)].map((_, i) => {
          const time = 10 + i * 5;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => handleTimeSelect(time)}
              style={[styles.timeOption, selectedLocalTime === time && styles.selectedOption]}
            >
              <Text style={styles.optionText}>{time}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Tag selection */}
      <Text style={styles.title}>เลือกแท็ก</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
        {tagOptions.map((tag, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => handleTagSelect(tag)}
            style={[
              styles.tagOption,
              { backgroundColor: tag.color + "33" },
              selectedLocalTag?.name === tag.name && styles.selectedOption,
            ]}
          >
            <View style={[styles.tagDot, { backgroundColor: tag.color }]} />
            <Text style={styles.optionText}>{tag.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Plant button and countdown */}
      <TouchableOpacity style={styles.plantButton} onPress={handlePlant}>
        <Text style={styles.plantButtonText}>ปลูก!</Text>
      </TouchableOpacity>

      {isPlantingLocal && countdown > 0 && (
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>กำลังปลูก: {formatTime(countdown)}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Mitr_Regular",
    marginBottom: 10,
    marginTop: 20,
    color: "#333",
  },
  optionRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  treeOption: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  treeImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  timeOption: {
    backgroundColor: "#FFFCF2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontFamily: "Mitr_Regular",
    color: "#32343E",
  },
  tagOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  tagDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  plantButton: {
    backgroundColor: "#84BD00",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  plantButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Mitr_SemiBold",
  },
  countdownContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  countdownText: {
    fontSize: 16,
    fontFamily: "Mitr_Regular",
    color: "#666",
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#84BD00", // Default color for selection
  },
});

export default BottomSheetOptions;
