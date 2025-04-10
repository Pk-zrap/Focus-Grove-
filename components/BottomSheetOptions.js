import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const treeImages = [
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/icon.png"),
  require("../assets/favicon.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
  require("../assets/Tree/IMG_1310 1.png"),
];

const tagOptions = [
  { name: "การเรียน", color: "#FFD700" },
  { name: "งาน", color: "#6495ED" },
  { name: "โซเชียล", color: "#6A5ACD" },
  { name: "พักผ่อน", color: "#4B0082" },
];

const BottomSheetOptions = ({
  closeBottomSheet,
  setSelectedTree,
  setSelectedTime,
  setSelectedTag,
  setIsPlanting,
}) => {
  const [selectedLocalTree, setSelectedLocalTree] = useState(null);
  const [selectedLocalTime, setSelectedLocalTime] = useState(null);
  const [selectedLocalTag, setSelectedLocalTag] = useState(null);
  const [isPlantingLocal, setIsPlantingLocal] = useState(false);
  const [countdown, setCountdown] = useState(0);

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

  const handleTreeSelect = (tree) => setSelectedLocalTree(tree);
  const handleTimeSelect = (time) => setSelectedLocalTime(time);
  const handleTagSelect = (tag) => setSelectedLocalTag(tag);

  const handlePlant = () => {
    if (selectedLocalTree && selectedLocalTime && selectedLocalTag) {
      setSelectedTree(selectedLocalTree);
      setSelectedTime(selectedLocalTime);
      setSelectedTag(selectedLocalTag);
      closeBottomSheet(); // ปิด Bottom Sheet หลังจากเลือกค่า
    } else {
      alert("กรุณาเลือกต้นไม้, เวลา และแท็ก ก่อนกดปุ่มปลูก");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const groupTrees = [];
  for (let i = 0; i < treeImages.length; i += 8) {
    groupTrees.push(treeImages.slice(i, i + 8));
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>เลือกต้นไม้</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {groupTrees.map((group, index) => (
          <View key={index} style={styles.treePage}>
            {group.map((tree, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => handleTreeSelect(tree)}
                style={[
                  styles.treeOption,
                  selectedLocalTree === tree && styles.selectedOption,
                ]}
              >
                <Image source={tree} style={styles.treeImage} />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {[...Array(Math.ceil(treeImages.length / 8))].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              // You might want to add active dot styling based on scroll position
            ]}
          />
        ))}
      </View>

      <Text style={styles.title}>เลือกเวลา (นาที)</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionRow}
      >
        {[...Array(35)].map((_, i) => {
          const time = 10 + i * 5;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => handleTimeSelect(time)}
              style={[
                styles.timeOption,
                selectedLocalTime === time && styles.selectedOption,
              ]}
            >
              <Text style={styles.optionText}>{time}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Text style={styles.title}>เลือกแท็ก</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.optionRow}
      >
        {tagOptions.map((tag, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => handleTagSelect(tag)}
            style={[styles.tagOption, { backgroundColor: tag.color }]}
          >
            <Text style={styles.tagText}>{tag.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.plantButtonContainer}>
        <View style={styles.selectedInfo}>
          {selectedLocalTree && (
            <View style={styles.selectedItem}>
              <Text style={styles.selectedLabel}>ต้นไม้:</Text>
              <Image source={selectedLocalTree} style={styles.selectedImage} />
            </View>
          )}
          {selectedLocalTime && (
            <View style={styles.selectedItem}>
              <Text style={styles.selectedLabel}>เวลา:</Text>
              <Text style={styles.selectedText}>{selectedLocalTime} นาที</Text>
            </View>
          )}
          {selectedLocalTag && (
            <View style={styles.selectedItem}>
              <Text style={styles.selectedLabel}>แท็ก:</Text>
              <View
                style={[
                  styles.selectedTag,
                  { backgroundColor: selectedLocalTag.color },
                ]}
              >
                <Text style={styles.selectedTagText}>
                  {selectedLocalTag.name}
                </Text>
              </View>
            </View>
          )}
          {!selectedLocalTree && !selectedLocalTime && !selectedLocalTag && (
            <Text style={styles.instructionText}>
              เลือกต้นไม้, เวลา, และแท็ก
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.plantButton} onPress={handlePlant}>
          <Text style={styles.plantButtonText}>ปลูก</Text>
        </TouchableOpacity>
      </View>

      {isPlantingLocal && (
        <View style={styles.countdownContainer}>
          <Text style={styles.countdownText}>
            เวลาที่เหลือ: {formatTime(countdown)}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    color: "#333",
  },
  optionRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  treePage: {
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  treeOption: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
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
    color: "#32343E",
  },
  tagOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: "center",
    marginRight: 10,
  },
  tagText: {
    color: "white",
    fontSize: 14,
  },
  plantButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  selectedInfo: {
    flex: 1,
    marginRight: 10,
  },
  selectedItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  selectedLabel: {
    fontSize: 14,
    color: "#555",
    marginRight: 5,
  },
  selectedText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  selectedImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  selectedTag: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selectedTagText: {
    color: "white",
    fontSize: 12,
  },
  instructionText: {
    fontSize: 14,
    color: "#888",
  },
  plantButton: {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  plantButtonText: {
    color: "#32343E",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#84BD00",
  },
  countdownContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  countdownText: {
    fontSize: 16,
    color: "#666",
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 5,
  },
});

export default BottomSheetOptions;
