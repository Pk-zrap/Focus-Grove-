// ===================== Import Modules & Components =====================
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

// ===================== ต้นไม้ตัวเลือก =====================
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

// ===================== แท็กตัวเลือก =====================
const tagOptions = [
  { name: "การเรียน", color: "#FFD700" },
  { name: "งาน", color: "#6495ED" },
  { name: "โซเชียล", color: "#6A5ACD" },
  { name: "พักผ่อน", color: "#4B0082" },
];

// ===================== BottomSheetOptions Component =====================
const BottomSheetOptions = ({
  closeBottomSheet,
  setSelectedTree,
  setSelectedTime,
  setSelectedTag,
}) => {
  // ===================== Local States =====================
  const [selectedLocalTree, setSelectedLocalTree] = useState(null);
  const [selectedLocalTime, setSelectedLocalTime] = useState(null);
  const [selectedLocalTag, setSelectedLocalTag] = useState(null);

  // ===================== Handlers for Selection =====================
  const handleTreeSelect = (tree) => setSelectedLocalTree(tree);
  const handleTimeSelect = (time) => setSelectedLocalTime(time);
  const handleTagSelect = (tag) => setSelectedLocalTag(tag);

  const handlePlant = () => {
    if (selectedLocalTree && selectedLocalTime && selectedLocalTag) {
      setSelectedTree(selectedLocalTree);
      setSelectedTime(selectedLocalTime);
      setSelectedTag(selectedLocalTag);
      closeBottomSheet();
    } else {
      alert("กรุณาเลือกต้นไม้, เวลา และแท็ก ก่อนกดปุ่มเลือก");
    }
  };

  // ===================== แบ่งต้นไม้เป็นกลุ่มละ 8 รูป (แสดงแบบ paging) =====================
  const groupTrees = [];
  for (let i = 0; i < treeImages.length; i += 8) {
    groupTrees.push(treeImages.slice(i, i + 8));
  }

  // ===================== UI Layout =====================
  return (
    <ScrollView style={styles.container}>
      {/* ===================== ปุ่มยกเลิก ===================== */}
      <TouchableOpacity onPress={closeBottomSheet} style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>ยกเลิก</Text>
      </TouchableOpacity>

      {/* ===================== เลือกต้นไม้ ===================== */}
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

      {/* ===================== Dot Indicator ===================== */}
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <Image source={require("../assets/ListT.png")} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* ===================== เลือกเวลา ===================== */}
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

      {/* ===================== เลือกแท็ก ===================== */}
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

      {/* ===================== แสดงผลลัพธ์ที่เลือก และปุ่มปลูก ===================== */}
      <View style={styles.bottomSection}>
        <View style={styles.selectedInfoContainer}>
          {selectedLocalTree && (
            <View style={styles.selectedItem}>
              <Image source={selectedLocalTree} style={styles.selectedImage} />
            </View>
          )}
          <View style={styles.timeAndTagContainer}>
            {selectedLocalTime && (
              <View style={styles.selectedItem}>
                <Text style={styles.selectedLabel}> 🕑 :</Text>
                <Text style={styles.selectedText}>
                  {selectedLocalTime} นาที
                </Text>
              </View>
            )}
            {selectedLocalTag && (
              <View style={styles.selectedItem}>
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

            {/* ===================== ข้อความแนะนำเมื่อยังไม่ได้เลือกอะไรเลย ===================== */}
            {!selectedLocalTree && !selectedLocalTime && !selectedLocalTag && (
              <Text style={styles.instructionText}>
                เลือกต้นไม้, เวลา, และแท็ก
              </Text>
            )}
          </View>
        </View>

        {/* ===================== ปุ่มเลือก ===================== */}
        <TouchableOpacity
          style={[
            styles.plantButton,
            !(selectedLocalTree && selectedLocalTime && selectedLocalTag) &&
              styles.disabledButton, // เพิ่มสไตล์ปุ่มเมื่อยังไม่ได้เลือกทุกอย่าง
          ]}
          onPress={handlePlant}
          disabled={
            !(selectedLocalTree && selectedLocalTime && selectedLocalTag)
          } // ปิดการใช้งานปุ่มถ้ายังไม่ได้เลือก
        >
          <Text style={styles.plantButtonText}>เลือก</Text>
        </TouchableOpacity>
      </View>
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
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "space-between",
  },
  selectedInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1, // Allow this container to shrink if needed
  },
  timeAndTagContainer: {
    flexDirection: "column",
    marginLeft: 10,
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
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  selectedTag: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 30,
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
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
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
  dotsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 5,
  },
  // ===================== Style สำหรับปุ่มยกเลิก =====================
  cancelButton: {
    position: "absolute",
    top: 10,
    right: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#D32F2F",
    zIndex: 10,
  },
  cancelButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default BottomSheetOptions;
