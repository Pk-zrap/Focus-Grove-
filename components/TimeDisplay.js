import React, { useRef, useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheetOptions from "./BottomSheetOptions";

const TimeDisplay = () => {
  const bottomSheetRef = useRef(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const [selectedTree, setSelectedTree] = useState(
    require("../assets/Tree/IMG_1310 1.png")
  );
  const [selectedTime, setSelectedTime] = useState(180);
  const [remainingTime, setRemainingTime] = useState(0);
  const [selectedTag, setSelectedTag] = useState({
    name: "การเรียน",
    color: "blue",
  });

  const [isCounting, setIsCounting] = useState(false);

  const openBottomSheet = () => {
    setIsBottomSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  const snapPoints = useMemo(() => ["25%", "77%"], []);

  useEffect(() => {
    let timer;
    if (isCounting && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (isCounting && remainingTime === 0) {
      setIsCounting(false);
    }
    return () => clearTimeout(timer);
  }, [isCounting, remainingTime]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins} : ${secs}`;
  };

  const handlePlant = () => {
    setRemainingTime(selectedTime * 60);
    setIsCounting(true);
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.imageContainer}>
        <Image source={selectedTree} style={styles.TreeImage} />
      </View>

      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={openBottomSheet}
      >
        <View
          style={[styles.categoryDot, { backgroundColor: selectedTag.color }]}
        />
        <Text style={styles.categoryText}>{selectedTag.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.timeContainer} onPress={openBottomSheet}>
        <Text style={styles.timeText}>
          {remainingTime > 0
            ? formatTime(remainingTime)
            : `${selectedTime} : 00`}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isBottomSheetOpen}
        transparent={true}
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
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
                  setIsPlanting={setIsCounting}
                  setTimeRemaining={setRemainingTime}
                  onPlantPress={() => {
                    handlePlant();
                    closeBottomSheet();
                  }}
                />
              </BottomSheetView>
            </BottomSheet>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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

      <TouchableOpacity
        style={styles.plantButton}
        onPress={handlePlant}
        disabled={isCounting}
      >
        <Text style={styles.plantButtonText}>
          {isCounting ? "กำลังปลูก..." : "ปลูก"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainButton: {
    backgroundColor: "#FFC107",
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  mainButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Sen",
  },
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
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  coinImage: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  coinText: {
    fontSize: 14,
    color: "#32343E",
    fontFamily: "Sen",
  },
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
  TreeImage: {
    width: 230, // Adjusted size
    height: 230, // Adjusted size
    resizeMode: "contain",
  },
  categoryContainer: {
    width: 120, // Adjusted width
    height: 35, // Adjusted height
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 10, // Adjusted border radius
    marginBottom: 20,
  },
  categoryDot: {
    width: 12, // Adjusted size
    height: 12, // Adjusted size
    borderRadius: 6, // Adjusted radius
    marginRight: 8, // Adjusted margin
  },
  categoryText: {
    fontSize: 16,
    color: "#32343E",
    fontFamily: "Mitr_Regular",
  },
  timeContainer: {
    width: 300, // Adjusted width
    height: 80, // Adjusted height
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 12, // Adjusted border radius
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  timeText: {
    fontSize: 45, // Adjusted font size
    fontFamily: "Sen",
    color: "#32343E",
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 8, // Adjusted gap
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25, // Adjusted margin bottom
  },
  dot: {
    width: 8, // Adjusted size
    height: 8, // Adjusted size
    borderRadius: 4, // Adjusted radius
    backgroundColor: "#D0D0D0",
    marginHorizontal: 4, // Adjusted horizontal margin
  },
  plantButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 12, // Adjusted padding
    paddingHorizontal: 40, // Adjusted padding
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  plantButtonText: {
    fontSize: 18,
    fontFamily: "Sen",
    color: "#FFF",
  },
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