import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Modal,Image } from "react-native";
import TreeList from "../components/TreeList";
import { ScrollView } from "react-native";


const TreeJournal = () => {
  const items = {
    "ทั่วไป": [
      { id: "1", name: "ต้นไม้ทั่วไป 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Common" },
      { id: "2", name: "ต้นไม้ทั่วไป 2", progress: 0.3, imageUrl: require("../assets/TreeA.jpeg"), rank: "Common" },
      { id: "3", name: "ต้นไม้ทั่วไป 3", progress: 0.8, imageUrl: require("../assets/TreeA.jpeg"), rank: "Common" },
      { id: "4", name: "ต้นไม้ทั่วไป 4", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Common" },
    ],
    "หายาก": [
      { id: "1", name: "ต้นไม้หายาก 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Uncommon" },
      { id: "2", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Uncommon" },
      { id: "3", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Uncommon" },
      { id: "4", name: "ต้นไม้ทั่วไป 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Uncommon" },
    ],
    "พิเศษ": [
      { id: "1", name: "ต้นไม้หายาก 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Rare" },
      { id: "2", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Rare" },
      { id: "3", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Rare" },
      { id: "4", name: "ต้นไม้ทั่วไป 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Rare" },
      { id: "5", name: "ต้นไม้ทั่วไป 2", progress: 0.3, imageUrl: require("../assets/TreeA.jpeg"), rank: "Rare" },
      { id: "6", name: "ต้นไม้ทั่วไป 3", progress: 0.8, imageUrl: require("../assets/TreeA.jpeg"), rank: "Rare" },
    ],
    "มหากาพย์": [
      { id: "1", name: "ต้นไม้หายาก 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Epic" },
      { id: "2", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Epic" },
      { id: "3", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Epic" },
    ],
    "ตำนาน": [
      { id: "1", name: "ต้นไม้ตำนาน 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "2", name: "ต้นไม้ตำนาน 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "3", name: "ต้นไม้ตำนาน 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "4", name: "ต้นไม้ตำนาน 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "5", name: "ต้นไม้ตำนาน 2", progress: 0.3, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "6", name: "ต้นไม้ตำนาน 3", progress: 0.8, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "7", name: "ต้นไม้ตำนาน 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "8", name: "ต้นไม้ตำนาน 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "9", name: "ต้นไม้ตำนาน 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "10", name: "ต้นไม้ตำนาน 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "11", name: "ต้นไม้ตำนาน 2", progress: 0.3, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "12", name: "ต้นไม้ตำนาน 3", progress: 0.8, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "13", name: "ต้นไม้ตำนาน 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "14", name: "ต้นไม้ตำนาน 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "15", name: "ต้นไม้ตำนาน 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "16", name: "ต้นไม้ตำนาน 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "17", name: "ต้นไม้ตำนาน 2", progress: 0.3, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "18", name: "ต้นไม้ตำนาน 3", progress: 0.8, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("ทั่วไป");
  const [selectedTree, setSelectedTree] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false);

  const calculateProgress = (category) => {
    const categoryItems = items[category];
    if (!categoryItems || categoryItems.length === 0) return 0;
    const totalProgress = categoryItems.reduce((acc, item) => acc + item.progress, 0);
    return totalProgress / categoryItems.length;
  };

  const categoryProgress = useMemo(() => {
    return calculateProgress(selectedCategory);
  }, [selectedCategory]);

  const handleCategorySelect = (category) => setSelectedCategory(category);

  const handleTreePress = (tree) => {
    setSelectedTree(tree);
    setModalVisible(true);
  };

  const renderItems = () => {
    const categoryItems = items[selectedCategory];
    return categoryItems.map((item) => (
      <TreeList
        key={item.id}
        imageUrl={item.imageUrl}
        treeName={item.name}
        treeRank={item.rank}
        isUnlocked={item.progress > 0}
        onPress={() => handleTreePress(item)} 
      />
    ));
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.categoryButtons}>
        {["ทั่วไป", "หายาก", "พิเศษ", "มหากาพย์", "ตำนาน"].map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <TouchableOpacity
              key={category}
              onPress={() => handleCategorySelect(category)}
              style={[styles.categoryButton, isSelected && styles.selectedButton]}
            >
              <Text style={[styles.categoryText, isSelected && styles.selectedText]}>
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Text style={styles.progressText}>
        {`ปลดล็อคแล้ว ${Math.round(categoryProgress * 100)}%`}
      </Text>

      <View style={styles.itemList}>{renderItems()}</View>
    </ScrollView>

    {/* Modal แสดงรายละเอียดต้นไม้ */}
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {selectedTree && (
            <>
              <Image source={selectedTree.imageUrl} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedTree.name}</Text>
              <Text>ระดับ: {selectedTree.rank}</Text>
              <Text>ความคืบหน้า: {Math.round(selectedTree.progress * 100)}%</Text>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={{ color: "#fff" }}>ปิด</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8E8E8",

  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#C3C6CF",
    borderRadius: 10,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, 
  },
  selectedButton: {
    backgroundColor: "#FFFCF3",
  },
  categoryText: {
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    color: "#FFFCF3",
  },
  selectedText: {
    color: "#343334",
  },
  
  progressText: {
    color: "#9B9B9B",
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  itemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#343334",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
});

export default TreeJournal;