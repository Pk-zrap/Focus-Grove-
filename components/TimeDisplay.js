import React, { useRef, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheetOptions from "./BottomSheetOptions";

const TimeDisplay = () => {
  const bottomSheetRef = useRef(null);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <View style={styles.container}>
      {/* กดเพื่อเปิด Bottom Sheet */}
      <TouchableOpacity onPress={openBottomSheet} style={styles.timerBox}>
        <Text style={styles.timerText}>180 : 00</Text>
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={["25%", "50%"]}>
        <BottomSheetOptions closeBottomSheet={closeBottomSheet} />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  timerBox: {
    backgroundColor: "#A4B1C1",
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 10,
  },
  timerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default TimeDisplay;
