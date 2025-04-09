import React, { useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheetOptions from "./BottomSheetOptions";

const TimeDisplay = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headertitle}>
          <Text style={styles.headertitleText}>เริ่มต้นปลูกกันเลย</Text>
        </View>

        <TouchableOpacity style={styles.editButton} onPress={openBottomSheet}>
          <Icon name="edit" size={20} color="#FFC107" />
        </TouchableOpacity>
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
                  // นี่คือส่วนที่เพิ่มเข้ามา: ส่ง setRemainingTime เป็น prop ชื่อ setTimeRemaining
                  setTimeRemaining={setRemainingTime}
                  onPlantPress={() => {
                    handlePlant(); // เริ่มนับเวลา
                    closeBottomSheet(); // ปิด Bottom Sheet
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
    marginBottom: 50,
  },
  headertitle: {
    width: 200,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#FFFCF2",
    borderRadius: 8,
  },
  headertitleText: {
    fontSize: 14,
    color: "#9B9B9B",
    fontFamily: "Mitr_Regular",
  },
  editButton: {
    backgroundColor: "#FFFCF2",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
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
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  categoryContainer: {
    width: 100,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 8,
    marginBottom: 20,
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "#32343E",
    fontFamily: "Mitr_Regular",
  },
  timeContainer: {
    width: 320,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF2",
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  timeText: {
    fontSize: 50,
    fontFamily: "Sen",
    color: "#32343E",
  },
  dotsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D0D0D0",
    marginHorizontal: 5,
  },
  plantButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 15,
    paddingHorizontal: 50,
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
  },
});

export default TimeDisplay;