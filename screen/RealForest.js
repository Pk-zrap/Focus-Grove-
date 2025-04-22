import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RealForest() {
  const [selectedTree, setSelectedTree] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isWarningModalVisible, setIsWarningModalVisible] = useState(false);

  const [natureCoins, setNatureCoins] = useState(10000);
  const [dimensionCoins, setDimensionCoins] = useState(2000);

  useEffect(() => {
    const loadCoins = async () => {
      try {
        const storedNature = await AsyncStorage.getItem("natureCoins");
        const storedDimension = await AsyncStorage.getItem("dimensionCoins");

        if (storedNature !== null) setNatureCoins(parseInt(storedNature));
        if (storedDimension !== null) setDimensionCoins(parseInt(storedDimension));
      } catch (e) {
        console.error("Error loading coin data:", e);
      }
    };

    loadCoins();
  }, []);

  const treeImages = {
    ต้นกล้าไม้ยางนา: require("../assets/TreeA.jpeg"),
    ต้นพะยูง: require("../assets/TreeA.jpeg"),
    ต้นรวงผึ้ง: require("../assets/TreeA.jpeg"),
    ต้นราชพฤกษ์: require("../assets/TreeA.jpeg"),
  };

  const displayedImage =
    treeImages[selectedTree] || require("../assets/TreeA.jpeg");

  const handlePlantTree = () => {
    if (!selectedTree || !selectedLocation || !selectedPayment) {
      setIsWarningModalVisible(true);
      return;
    }

    if (
      (selectedPayment === "NatureCoins" && natureCoins < 5000) ||
      (selectedPayment === "TreeTokens" && dimensionCoins < 1000)
    ) {
      alert("เหรียญไม่เพียงพอสำหรับการปลูกต้นไม้");
      return;
    }

    setIsModalVisible(true);
  };

  const handleConfirmPlanting = async () => {
    setIsModalVisible(false);

    if (selectedPayment === "NatureCoins") {
      const updatedNature = natureCoins - 5000;
      setNatureCoins(updatedNature);
      await AsyncStorage.setItem("natureCoins", updatedNature.toString());
    } else if (selectedPayment === "TreeTokens") {
      const updatedDimension = dimensionCoins - 1000;
      setDimensionCoins(updatedDimension);
      await AsyncStorage.setItem("dimensionCoins", updatedDimension.toString());
    }

    setIsSuccessModalVisible(true);

    const plantingData = {
      tree: selectedTree,
      location: selectedLocation,
      paymentMethod: selectedPayment,
    };

    console.log("ข้อมูลการปลูกต้นไม้:", plantingData);

    try {
      await AsyncStorage.setItem(
        "latestPlanting",
        JSON.stringify(plantingData)
      );
      console.log("บันทึกข้อมูลสำเร็จ");
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  };

  const handleCancelPlanting = () => {
    setIsModalVisible(false);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalVisible(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <Text style={{ fontFamily: "Sen", fontSize: 16, color:"#343334" }}>
        🪙 : {natureCoins} | 💰 : {dimensionCoins}
        </Text>
      </View>

      <Image source={displayedImage} style={styles.image} />

      <Text style={styles.headerText}>ปลูกต้นไม้จริงเพื่อโลกของเรา 🌍</Text>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>เลือกต้นไม้ที่จะปลูก</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedTree}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedTree(itemValue)}
        >
          <Picker.Item label="-- เลือกต้นไม้ --" value="" />
          <Picker.Item label="ต้นกล้าไม้ยางนา" value="ต้นกล้าไม้ยางนา" />
          <Picker.Item label="ต้นพะยูง" value="ต้นพะยูง" />
          <Picker.Item label="ต้นรวงผึ้ง" value="ต้นรวงผึ้ง" />
          <Picker.Item label="ต้นราชพฤกษ์" value="ต้นราชพฤกษ์" />
        </Picker>
      </View>

      <Text style={styles.sectionTitle}>สถานที่ปลูก</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLocation}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        >
          <Picker.Item label="-- เลือกสถานที่ปลูก --" value="" />
          <Picker.Item
            label="เชียงใหม่ - ดอยสุเทพ"
            value="เชียงใหม่ - ดอยสุเทพ"
          />
          <Picker.Item
            label="สุราษฎร์ธานี - เขาสก"
            value="สุราษฎร์ธานี - เขาสก"
          />
          <Picker.Item
            label="นครราชสีมา - เขาใหญ่"
            value="นครราชสีมา - เขาใหญ่"
          />
          <Picker.Item label="อื่น ๆ (เจ้าหน้าที่ติดต่อกลับ)" value="อื่น ๆ" />
        </Picker>
      </View>

      <Text style={styles.sectionTitle}>เลือกวิธีการชำระ</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPayment}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedPayment(itemValue)}
        >
          <Picker.Item label="-- เลือกวิธีการชำระ --" value="" />
          <Picker.Item
            label="ใช้ NatureCoins (5,000 เหรียญ)"
            value="NatureCoins"
          />
          <Picker.Item
            label="ใช้ Dimension Coins (1,000 เหรียญ)"
            value="TreeTokens"
          />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePlantTree}>
        <Text style={styles.buttonText}>🌱 ปลูกต้นนี้</Text>
      </TouchableOpacity>

      {/* Confirmation Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCancelPlanting}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FontAwesome
              name="leaf"
              size={40}
              color="#2e7d32"
              style={styles.modalIcon}
            />
            <Text style={styles.modalTitle}>ยืนยันการปลูกต้นไม้</Text>
            <Text style={styles.modalText}>
              ต้นไม้: {selectedTree}
              {"\n"}
              สถานที่: {selectedLocation}
              {"\n"}
              ชำระด้วย: {selectedPayment}
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelPlanting}
              >
                <Text style={styles.buttonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmPlanting}
              >
                <Text style={styles.buttonText}>ยืนยันการปลูก</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Success Modal */}
      <Modal
        visible={isSuccessModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseSuccessModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseSuccessModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FontAwesome
                name="check-circle"
                size={40}
                color="#4CAF50"
                style={styles.modalIcon}
              />
              <Text style={styles.modalTitle}>🎉 ปลูกต้นไม้สำเร็จ!</Text>
              <Text style={styles.modalText}>
                ขอบคุณที่ช่วยโลกเรา 🌍
                {"\n\n"}" กำลังดำเนินการ "{"\n"}
                📍 ติดตามได้ในเมนู “ต้นไม้ของฉัน”
                {"\n"}
                ในการตั้งค่า
              </Text>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleCloseSuccessModal}
              >
                <Text style={styles.buttonText}>ปิด</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Warning Modal*/}
      <Modal
        visible={isWarningModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsWarningModalVisible(false)}
      >
        <TouchableWithoutFeedback
          onPress={() => setIsWarningModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FontAwesome
                name="exclamation-triangle"
                size={40}
                color="#FF8C00"
                style={styles.modalIcon}
              />
              <Text style={styles.modalTitle}>ข้อมูลไม่ครบถ้วน</Text>
              <Text style={styles.modalText}>
                กรุณาเลือกต้นไม้ สถานที่ และวิธีการชำระเงินก่อนดำเนินการ
              </Text>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setIsWarningModalVisible(false)}
              >
                <Text style={styles.buttonText}>ตกลง</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
    alignItems: "center",
  },
  image: {
    width: "75%",
    height: 295,
    borderRadius: 16,
    marginBottom: 16,
    resizeMode: "cover",
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    color: "#2e7d32",
    marginBottom: 8,
    fontFamily: "Mitr_Regular",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 16,
    marginBottom: 8,
    fontFamily: "Mitr_Regular",
    alignSelf: "flex-start",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    overflow: "hidden",
    width: "95%",
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    backgroundColor: "#F2B501",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Mitr_Regular",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  modalIcon: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Mitr_Regular",
    color: "#2e7d32",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Mitr_Regular",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 16,
    width: "40%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#FF5C5C",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
  },
});
