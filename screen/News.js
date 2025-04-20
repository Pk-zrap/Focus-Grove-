import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import NewList from "../components/NewList";
import { Pressable } from "react-native";

const News = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const newsData = [
    {
      id: "1",
      date: "14 มี.ค. 2025",
      type: "Event",
      imageUrl: require("../assets/Season of Bloom.jpeg"),
      title: "ฤดูแห่งการผลิบาน 🌸",
      description:
        "สัมผัสพลังแห่งฤดูใบไม้ผลิ ปลูกต้นไม้พิเศษและรับรางวัลสุดพิเศษในช่วง Season of Bloom 🌸🌿",
    },
    {
      id: "2",
      date: "15 มี.ค. 2025",
      type: "Event",
      imageUrl: require("../assets/Time Rift Lootbox.jpeg"),
      title: "กาชาแห่งมิติเวลา ⏳",
      description:
        "เปิดกล่องกาชามิติเวลา ลุ้นรับต้นไม้หายากและของขวัญจากอนาคต! ⌛🎁",
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {newsData.map((item) => (
          <NewList key={item.id} {...item} onPress={() => openModal(item)} />
        ))}
      </ScrollView>

      {/* Modal แสดงรายละเอียด */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Pressable style={styles.modalContainer} onPress={() => {}}>
            {selectedItem && (
              <>
                <Image
                  source={selectedItem.imageUrl}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                <Text style={styles.modalDate}>{selectedItem.date}</Text>
                <Text style={styles.modalDesc}>
                  -----------------------------------
                </Text>
                <Text style={styles.modalDesc}>{selectedItem.description}</Text>
                <TouchableOpacity
                  onPress={closeModal}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>ปิด</Text>
                </TouchableOpacity>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E8E8E8",
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "85%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontFamily: "Mitr_Regular",
    color: "#343334",
    textAlign: "center",
    marginBottom: 8,
  },
  modalDate: {
    fontFamily: "Sentinel_Regular",
    fontSize: 14,
    color: "#9b9b9b",
    marginBottom: 12,
  },
  modalDesc: {
    fontSize: 14,
    color: "#9b9b9b",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Mitr_Regular",
  },
  closeButton: {
    backgroundColor: "#FF8C66",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontFamily: "Mitr_Regular",
  },
});

export default News;
