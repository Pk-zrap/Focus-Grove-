import React, { useState, useMemo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import TreeList from "../components/TreeList";

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
      { id: "1", name: "ต้นไม้หายาก 1", progress: 0.4, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "2", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "3", name: "ต้นไม้หายาก 2", progress: 0.7, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "4", name: "ต้นไม้ทั่วไป 1", progress: 0.6, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "5", name: "ต้นไม้ทั่วไป 2", progress: 0.3, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
      { id: "6", name: "ต้นไม้ทั่วไป 3", progress: 0.8, imageUrl: require("../assets/TreeA.jpeg"), rank: "Legendary" },
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState("ทั่วไป");

  const calculateProgress = (category) => {
    const categoryItems = items[category];
    if (!categoryItems || categoryItems.length === 0) {
      return 0;
    }
    const totalProgress = categoryItems.reduce((acc, item) => acc + item.progress, 0);
    return totalProgress / categoryItems.length;
  };

  const categoryProgress = useMemo(() => {
    return calculateProgress(selectedCategory);
  }, [selectedCategory, items]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoryButtons}>
        {["ทั่วไป", "หายาก", "พิเศษ", "มหากาพย์", "ตำนาน"].map((category) => (
          <Button
            key={category}
            title={category}
            onPress={() => handleCategorySelect(category)}
            color={selectedCategory === category ? "#4CAF50" : "#2196F3"}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
          />
        ))}
      </View>

      <Text style={styles.progressText}>
        {`การปลดล็อคของหมวดหมู่ "${selectedCategory}": ${Math.round(categoryProgress * 100)}%`}
      </Text>

      <View style={styles.itemList}>{renderItems()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryButton: {
    width: "18%",
    borderRadius: 25,
    marginHorizontal: 5,
  },
  selectedCategoryButton: {
    backgroundColor: "#4CAF50",
  },
  progressText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  itemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default TreeJournal;