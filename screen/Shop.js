import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

// ตัวอย่างข้อมูล
const treeItems = [
  { name: "ต้นไม้ 1", image: require("../assets/TreeA.jpeg"), price: 10 },
  { name: "ต้นไม้ 2", image: require("../assets/TreeA.jpeg"), price: 20 },
  { name: "ต้นไม้ 3", image: require("../assets/TreeA.jpeg"), price: 30 },
];

const itemList = [
  { name: "หยดน้ำค้างแห่งแสงสว่าง*5", image: require("../assets/Timer.jpeg"), price: 30 },
  { name: "หยดน้ำค้างแห่งแสงสว่าง*3", image: require("../assets/Timer.jpeg"), price: 70 },
  { name: "หยดน้ำค้างแห่งแสงสว่าง*10", image: require("../assets/Timer.jpeg"), price: 150 },
];

const gachaList = [
  { name: "Gacha 1", image: require("../assets/Box.png"), price: 2000 },
  { name: "Gacha 2", image: require("../assets/Box.png"), price: 2000 },
  { name: "Gacha 3", image: require("../assets/Box.png"), price: 2000 },
];

const Shop = () => {
  const [natureCoins, setNatureCoins] = useState(150);
  const [dimensionCoins, setDimensionCoins] = useState(200);

  const handleBuyItem = (price) => {
    if (natureCoins >= price) {
      setNatureCoins(natureCoins - price);
      alert("ซื้อสำเร็จ!");
    } else {
      alert("เหรียญไม่เพียงพอ");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* แสดงเหรียญ */}
        <View style={styles.coinsContainer}>
          <Text style={styles.coinsText}>🪙 {natureCoins} | 💰 {dimensionCoins}</Text>
        </View>

        {/* บล็อก: ต้นไม้ */}
        <View style={styles.blockContainer}>
          <Text style={styles.sectionTitle}>🌳 ต้นไม้</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {treeItems.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>🪙 {item.price}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={() => handleBuyItem(item.price)}>
                  <Text style={styles.buyButtonText}>ซื้อ</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* บล็อก: ไอเทม */}
        <View style={styles.blockContainer}>
          <Text style={styles.sectionTitle}>💎 ไอเทม</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {itemList.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>🪙 {item.price}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={() => handleBuyItem(item.price)}>
                  <Text style={styles.buyButtonText}>ซื้อ</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* บล็อก: กาชา */}
        <View style={styles.blockContainer}>
          <Text style={styles.sectionTitle}>🎰 กาชา</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {gachaList.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>🪙 {item.price}</Text>
                <TouchableOpacity style={styles.buyButton} onPress={() => handleBuyItem(item.price)}>
                  <Text style={styles.buyButtonText}>เปิดกาชา</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E8E8",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  coinsContainer: {
    marginBottom: 25,
    alignItems: "center",
  },
  coinsText: {
    fontSize: 16,
    fontFamily: "Sen",
    color: "#2D3748",
  },
  blockContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontFamily: "Mitr_Regular",
    fontSize: 16,
    color: "#1A202C",
    marginBottom: 10,
  },
  card: {
    alignItems: "center",
    backgroundColor: "#EDF2F7",
    borderRadius: 15,
    padding: 10,
    width: 130,
    marginRight: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
    marginBottom: 8,
    borderRadius: 10,
  },
  itemName: {
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    textAlign: "center",
    color: "#2D3748",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 13,
    color: "#718096",
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: "#38B2AC",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buyButtonText: {
    color: "#FFF",
    fontFamily: "Mitr_Regular",
    fontSize: 14,
  },
});

export default Shop;
