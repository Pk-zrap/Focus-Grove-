// ===================== Import Modules & Components =====================
import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheetOptions from "./BottomSheetOptions";

// ===================== Main Component =====================
const TimeDisplay = () => {
  // ===================== State & Refs =====================
  const bottomSheetRef = useRef(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [selectedTree, setSelectedTree] = useState(
    require("../assets/Tree/IMG_1310 1.png")
  );
  const [selectedTime, setSelectedTime] = useState(180);
  const [remainingTime, setRemainingTime] = useState(180 * 60);
  const [selectedTag, setSelectedTag] = useState({
    name: "การเรียน",
    color: "blue",
  });
  const [isCounting, setIsCounting] = useState(false);

  // ===================== Snap Points for Bottom Sheet =====================
  const snapPoints = useMemo(() => ["25%", "77%"], []);

  // ===================== Bottom Sheet Functions =====================
  const openBottomSheet = () => setIsBottomSheetOpen(true);
  const closeBottomSheet = () => setIsBottomSheetOpen(false);

  // ===================== Countdown Timer Logic =====================
  useEffect(() => {
    let timer;
    if (isCounting && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (isCounting && remainingTime === 0) {
      setIsCounting(false);
      setRemainingTime(selectedTime * 60);
    }
    return () => clearTimeout(timer);
  }, [isCounting, remainingTime, selectedTime]);

  // ===================== Format Time Function =====================
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins} : ${secs}`;
  };

  // ===================== Handle Planting =====================
  const handlePlant = () => {
    setRemainingTime(selectedTime * 60);
    setIsCounting(true);
  };

  // ===================== Handle Cancel =====================
  const handleCancel = () => {
    setIsCounting(false);
    setRemainingTime(selectedTime * 60);
  };

  // ===================== UI Rendering =====================
  return (
    <View style={styles.container}>
      {/* ===================== Header ===================== */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.headertitle}>
            <Text style={styles.headertitleText}>เริ่มต้นปลูกกันเลย</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.coinContainer}>
            <Image
              source={require("../assets/Tree/IMG_1310 1.png")}
              style={styles.coinImage}
            />
            <Text style={styles.coinText}>20</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton} onPress={openBottomSheet}>
            <Icon name="edit" size={20} color="#FFC107" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ===================== Tree Image ===================== */}
      <View style={styles.imageContainer}>
        <Image source={selectedTree} style={styles.TreeImage} />
      </View>

      {/* ===================== Tag Selector ===================== */}
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={openBottomSheet}
      >
        <View
          style={[styles.categoryDot, { backgroundColor: selectedTag.color }]}
        />
        <Text style={styles.categoryText}>{selectedTag.name}</Text>
      </TouchableOpacity>

      {/* ===================== Time Selector ===================== */}
      <TouchableOpacity style={styles.timeContainer} onPress={openBottomSheet}>
        <Text style={styles.timeText}>
          {isCounting
            ? formatTime(remainingTime)
            : formatTime(selectedTime * 60)}
        </Text>
      </TouchableOpacity>

      {/* ===================== Bottom Sheet Modal ===================== */}
      <Modal
        visible={isBottomSheetOpen}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalBackground}>
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
          >
            <BottomSheetView style={styles.bottomSheetContent}>
              <BottomSheetOptions
                closeBottomSheet={closeBottomSheet}
                setSelectedTree={setSelectedTree}
                setSelectedTime={setSelectedTime}
                setSelectedTag={setSelectedTag}
              />
            </BottomSheetView>
          </BottomSheet>
        </View>
      </Modal>

      {/* ===================== Plant / Cancel Button ===================== */}
      <TouchableOpacity
        style={[
          styles.plantButton,
          isCounting && { backgroundColor: "#D32F2F" },
        ]}
        onPress={isCounting ? handleCancel : handlePlant}
      >
        <Text style={styles.plantButtonText}>
          {isCounting ? "ยกเลิก" : "ปลูก"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  headerLeft: { flexDirection: "row", alignItems: "center" },
  headertitle: {
    backgroundColor: "#FFFCF2",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headertitleText: {
    fontSize: 14,
    color: "#9B9B9B",
    fontFamily: "Mitr_Regular",
  },
  headerRight: { flexDirection: "row", alignItems: "center" },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  coinImage: { width: 16, height: 16, marginRight: 5 },
  coinText: { fontSize: 14, color: "#32343E", fontFamily: "Sen" },
  addButton: {
    backgroundColor: "#64DD17",
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  editButton: {
    backgroundColor: "#FFFCF2",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  imageContainer: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#FFFCF2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  TreeImage: { width: 230, height: 230, resizeMode: "contain" },
  categoryContainer: {
    width: 120,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 10,
    marginBottom: 20,
  },
  categoryDot: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  categoryText: { fontSize: 16, color: "#32343E", fontFamily: "Mitr_Regular" },
  timeContainer: {
    width: 300,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  timeText: { fontSize: 45, fontFamily: "Sen", color: "#32343E" },
  plantButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  plantButtonText: { fontSize: 18, fontFamily: "Sen", color: "#FFF" },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  bottomSheetContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});

export default TimeDisplay;
