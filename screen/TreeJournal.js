import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TreeList from "../components/TreeList";

const TreeJournal = () => {
  const [items, setItems] = useState({
    ทั่วไป: [
      {
        id: "1",
        name: "หญ้าสายหมอก 🌫️",
        progress: 1,
        imageUrl: require("../assets/Tree/Common_MistGrass.png"),
        rank: "Common",
        description:
          "เป็นหญ้าที่พบได้ในหุบเขาหมอกหนา เชื่อกันว่าเมื่อลูบไล้ใบหญ้านี้ คำอธิษฐานของผู้หลงทางจะถูกส่งผ่านสายลม",
      },
      {
        id: "2",
        name: "เห็ดเรืองแสงจิ๋ว 🍄✨",
        progress: 1,
        imageUrl: require("../assets/Tree/Common_TinyGlowingMushrooms.png"),
        rank: "Common",
        description:
          "เห็ดที่ส่องแสงสว่างในความมืด เชื่อกันว่าแสงนี้จะนำทางคนที่หลงทางในป่า",
      },
      {
        id: "3",
        name: "วัชพืชสายฟ้า ⚡🌿",
        progress: 0,
        imageUrl: require("../assets/Tree/Common_ThunderWeed.png"),
        rank: "Common",
        description:
          "พืชที่เติบโตเฉพาะในช่วงที่พายุฟ้าคะนอง มันสะสมพลังงานไฟฟ้าไว้ในเซลล์ ทำให้ผู้สัมผัสรู้สึกมีพลัง",
      },
      {
        id: "4",
        name: "ต้นกระพรวนลม 🔔",
        progress: 0,
        imageUrl: require("../assets/Tree/Common_WindChimes.png"),
        rank: "Common",
        description:
          "ดอกไม้ที่ส่งเสียงดังกังวานเมื่อสายลมพัดผ่าน ช่วยให้จิตใจสงบ",
      },
      {
        id: "5",
        name: "มอสท์แห่งกาลเวลา 🕰️",
        progress: 1,
        imageUrl: require("../assets/Tree/Common_TheMossOfTime.png"),
        rank: "Common",
        description:
          "เติบโตบนก้อนหินโบราณ เชื่อกันว่าหากจับต้องมัน อาจมองเห็นอดีต",
      },
      {
        id: "6",
        name: "ดอกดาวเคราะห์ 🪐 ",
        progress: 1,
        imageUrl: require("../assets/Tree/Common_PlanetFlower.png"),
        rank: "Common",
        description:
          "มีลักษณะคล้ายดวงดาวหมุนรอบตัวเอง เชื่อกันว่ามันเก็บพลังงานจากจักรวาล",
      },
      {
        id: "7",
        name: "เห็ดเสียงกระซิบ 🌀",
        progress: 1,
        imageUrl: require("../assets/Tree/Common_WhisperingMushroom.png"),
        rank: "Common",
        description: "หากเอาหูแนบใกล้ จะได้ยินเสียงกระซิบของโลกวิญญาณ",
      },
      {
        id: "8",
        name: "ต้นเงาแห่งรัตติกาล 🌑",
        progress: 0,
        imageUrl: require("../assets/Tree/Common_ShadowTreeOfTheNight.png"),
        rank: "Common",
        description: "ต้นไม้สีดำที่งอกเฉพาะในคืนที่ดวงจันทร์เต็มดวง",
      },
      {
        id: "9",
        name: "ไม้เลื้อยสีรุ้ง 🌈",
        progress: 0,
        imageUrl: require("../assets/Tree/Common_RainbowVine.png"),
        rank: "Common",
        description: "ว่ากันว่า มันจะเปลี่ยนสีตามอารมณ์ของผู้ที่อยู่ใกล้",
      },
    ],
    หายาก: [
      {
        id: "1",
        name: "ดอกไม้ต้องสาป 🔥🌺",
        progress: 1,
        imageUrl: require("../assets/Tree/Uncommon_CursedFlower.png"),
        rank: "Uncommon",
        description:
          "เล่าว่าดอกไม้นี้เกิดจากน้ำตาของแม่มด มีเสน่ห์ดึงดูดแต่สัมผัสไม่ได้ มิฉะนั้นคำสาปจะติดตัวไป",
      },
      {
        id: "2",
        name: "บอนไซหมอกมายา 🌫️🌳",
        progress: 1,
        imageUrl: require("../assets/Tree/Uncommon_MirageBonsai.png"),
        rank: "Uncommon",
        description:
          "บอนไซที่เติบโตในโลกแห่งเงา มองดูจากมุมหนึ่งจะเห็นเป็นต้นไม้ แต่มุมอื่นจะเห็นเป็นหมอกจาง",
      },
      {
        id: "3",
        name: "เห็ดจันทรา 🍄🌙",
        progress: 1,
        imageUrl: require("../assets/Tree/Uncommon_MoonMushroom.png"),
        rank: "Uncommon",
        description:
          "เห็ดเรืองแสงในความมืด ว่ากันว่าแสงนั้นเป็นการดูดซับพลังจากดวงจันทร์",
      },
      {
        id: "4",
        name: "ดอกสุริยา ☀️🌺",
        progress: 0,
        imageUrl: require("../assets/Tree/Uncommon_SunFlower.png"),
        rank: "Uncommon",
        description:
          "ดอกไม้ที่ส่องแสงแรงกว่าดวงอาทิตย์ ว่ากันว่าใครที่พบเห็นดอกไม้นี้จะโชคดีไป 1 ปีเต็ม",
      },
      {
        id: "5",
        name: "เห็ดเสียงเพลง 🍄 🎶",
        progress: 0,
        imageUrl: require("../assets/Tree/Uncommon_MusicalMushrooms.png"),
        rank: "Uncommon",
        description:
          "เสียงเพลงที่มาจากเห็ดจะทำให้ติดใจสงบขึ้น - “ลืมเรื่องเครียดๆ แล้วมาฟังเพลงของฉันกัน",
      },
      {
        id: "6",
        name: "เห็ดกระจกแห่งมิติ 🪞",
        progress: 1,
        imageUrl: require("../assets/Tree/Uncommon_DimensionalMirrorMushroom.png"),
        rank: "Uncommon",
        description: "สะท้อนภาพของโลกอีกด้านหนึ่ง ที่ไม่มีใครมองเห็น",
      },
    ],
    พิเศษ: [
      {
        id: "1",
        name: "ต้นไม้สายเลือดมังกร 🐉🌲",
        progress: 0,
        imageUrl: require("../assets/Tree/Rare_DragonBloodTree.png"),
        rank: "Rare",
        description:
          "ต้นไม้ที่ไหลเวียนด้วยเรซินสีแดงเข้มคล้ายโลหิตมังกร เชื่อกันว่าใครดื่มมันจะได้รับพลังแห่งมังกร",
      },
      {
        id: "2",
        name: "ซากุระเงาพระจันทร์ 🌙🌸",
        progress: 1,
        imageUrl: require("../assets/Tree/Rare_MoonshadowSakura.png"),
        rank: "Rare",
        description:
          "ซากุระที่บานเฉพาะคืนเดือนดับ ดอกของมันปล่อยละอองเรืองแสงราวกับหมู่ดาวที่ตกลงมา",
      },
      {
        id: "3",
        name: "ต้นฝันดี 🌜🌲",
        progress: 1,
        imageUrl: require("../assets/Tree/Rare_GoodnightTree.png"),
        rank: "Rare",
        description: "ละอองจากใบของมันทำให้ผู้ที่โดนสัมพัสมีความฝันที่สดใส",
      },
      {
        id: "4",
        name: "ต้นสนหมื่นเงา 🌲",
        progress: 1,
        imageUrl: require("../assets/Tree/Rare_TenThousandShadowsPineTree.png"),
        rank: "Rare",
        description:
          "ปลดปล่อยกลุ่มเงาออกมาเต้นรำในยามค่ำคืน ผู้ใดที่พบเห็นจะทุกเงาจับตัวไป",
      },
    ],
    มหากาพย์: [
      {
        id: "1",
        name: "ต้นพฤกษาเทพ 👑",
        progress: 1,
        imageUrl: require("../assets/Tree/Epic_TheTreeOfGods.png"),
        rank: "Epic",
        description: "เชื่อกันว่าเทพผู้เฝ้าป่าเป็นคนปลูกขึ้นมา",
      },
      {
        id: "2",
        name: "ดอกแห่งความหวัง",
        progress: 1,
        imageUrl: require("../assets/Tree/Epic_FlowerOfHope.png"),
        rank: "Epic",
        description:
          "ดอกไม้ที่ปลูกจากความหวังของผู้คนที่อยากจะไปถึงเป้าหมายในอนาคต ทุกกลีบของมันเต็มไปด้วยความปรารถนาให้คนที่ได้มันไปจะประสบความสำเร็จในทุกสิ่ง!",
      },
    ],
    ตำนาน: [
      {
        id: "1",
        name: "ต้นโลกา 🌎🌳",
        progress: 0,
        imageUrl: require("../assets/Tree/Legendary_EtherealYggdrasil.png"),
        rank: "Legendary",
        description:
          "ต้นไม้ในตำนานที่เป็นศูนย์กลางของจักรวาล รากของมันแผ่ไปสู่ทุกมิติ กิ่งก้านของมันโอบรับแสงดาว",
      },
      {
        id: "2",
        name: "ต้นไม้แห่งการบรรลุ",
        progress: 1,
        imageUrl: require("../assets/Tree/Legendary_TreeOfAttainment.png"),
        rank: "Legendary",
        description:
          "ต้นไม้ที่เมื่อผู้ปลูกดูแลอย่างใส่ใจและเติบโต มันจะนำพาผู้ปลูกไปสู่การบรรลุถึงความเข้าใจในชีวิตและจักรวาล",
      },
      {
        id: "3",
        name: "ต้นไม้ของจอมมาร",
        progress: 0,
        imageUrl: require("../assets/Tree/Legendary_TheDemonLord_sTree.png"),
        rank: "Legendary",
        description:
          "ต้นไม้ที่จอมมารผู้ที่เข่นฆ่าล้างเผ่าพันธุ์ ได้ปลูกเอาไว้ มีเปลือกดำทมิฬและรากที่แผ่ไปทั่วดิน ซึ่งเป็นสัญลักษณ์ของความหายนะและการทำลายล้าง!",
      },
      {
        id: "4",
        name: "ต้นไม้ของเทพเจ้า",
        progress: 1,
        imageUrl: require("../assets/Tree/Legendary_TreeOfTheGods.png"),
        rank: "Legendary",
        description:
          "ต้นไม้ที่เทพเจ้าผู้เป็นที่รักของทุกคนได้ปลูกขึ้น ดอกของมันเปล่งประกายระยิบระยับและรากที่แข็งแกร่ง เชื่อมโยงกับพลังบริสุทธิ์และการคุ้มครองจากเทพเจ้า!",
      },
      {
        id: "5",
        name: "ต้นไม้แห่งความฝัน",
        progress: 0,
        imageUrl: require("../assets/Tree/Legendary_TreeOfDreams.png"),
        rank: "Legendary",
        description:
          "ต้นไม้ที่เกิดจากความฝันของผู้คนที่มุ่งหวังถึงอนาคตที่ดี ดอกของมันสะท้อนแสงแห่งความหวัง และเชื่อมโยงกับแรงบันดาลใจในการเดินหน้าต่อไป!",
      },
      {
        id: "6",
        name: "ต้นไม้ผีสิง",
        progress: 1,
        imageUrl: require("../assets/Tree/Legendary_HauntedTree.png"),

        rank: "Legendary",
        description:
          "ต้นไม้ที่ดูเหมือนต้นไม้ธรรมดา แต่มันแฝงไปด้วยพลังแห่งความมืด ถ้าคุณละสายตาจากมันไป อาจจะพบกับสิ่งที่น่ากลัว!",
      },
      {
        id: "7",
        name: "ต้นไม้แห่งความหวาดกลัว",
        progress: 0,
        imageUrl: require("../assets/Tree/Legendary_TreeOfFear.png"),
        rank: "Legendary",
        description: "ต้นไม้ที่จะมอบความหวาดกลัวให้กับผู้ที่พบเห็น",
      },
    ],
  });

  const rarityStyles = StyleSheet.create({
    Common: {
      color: "#7D7D7D",
      fontFamily: "SenSemibold",
    },
    Uncommon: {
      color: "#1E90FF",
      fontFamily: "SenSemibold",
    },
    Rare: {
      color: "#7B68EE",
      fontFamily: "SenSemibold",
    },
    Epic: {
      color: "#FF8C00",
      fontFamily: "SenSemibold",
    },
    Legendary: {
      color: "#FFBF00",
      fontFamily: "SenSemibold",
    },
  });

  const [selectedCategory, setSelectedCategory] = useState("ทั่วไป");
  const [selectedTree, setSelectedTree] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // คำนวณจำนวนต้นไม้ที่ปลดล็อคและจำนวนทั้งหมดในหมวดหมู่ที่เลือก
  const calculateUnlockedCount = (category) => {
    const categoryItems = items[category];
    if (!categoryItems || categoryItems.length === 0)
      return { unlocked: 0, total: 0 };
    const unlockedCount = categoryItems.filter(
      (item) => item.progress > 0
    ).length;
    return { unlocked: unlockedCount, total: categoryItems.length };
  };

  // คำนวณจำนวนต้นไม้ที่ปลดล็อคและจำนวนทั้งหมดในหมวดหมู่ที่เลือก
  const categoryUnlockedCount = useMemo(() => {
    const { unlocked } = calculateUnlockedCount(selectedCategory);
    return unlocked;
  }, [selectedCategory]);

  // คำนวณจำนวนต้นไม้ทั้งหมดในหมวดหมู่ที่เลือก
  const categoryTotalCount = useMemo(() => {
    const { total } = calculateUnlockedCount(selectedCategory);
    return total;
  }, [selectedCategory]);

  // ฟังก์ชันสำหรับจัดการการเลือกหมวดหมู่
  const handleCategorySelect = (category) => setSelectedCategory(category);

  // ฟังก์ชันสำหรับจัดการการกดที่ต้นไม้
  const handleTreePress = (tree) => {
    setSelectedTree(tree);
    setModalVisible(true);
  };

  // ฟังก์ชันสำหรับการแสดงรายการต้นไม้ในหมวดหมู่ที่เลือก
  const renderItems = () => {
    const categoryItems = items[selectedCategory];

    const sortedItems = [...categoryItems].sort((a, b) => {
      // เอาต้นไม้ที่ปลดล็อคไว้ด้านบน
      if (a.progress > 0 && b.progress === 0) return -1;
      if (a.progress === 0 && b.progress > 0) return 1;
      return 0;
    });

    return sortedItems.map((item) => (
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

  // ฟังก์ชันสำหรับการปลดล็อคต้นไม้
  const handleUnlockTree = () => {
    if (!selectedTree) return;

    // ค้นหาต้นไม้ที่ตรงกับ ID และอัปเดต progress
    const updatedItems = { ...items };
    const categoryTrees = updatedItems[selectedCategory].map((tree) => {
      if (tree.id === selectedTree.id) {
        return { ...tree, progress: 1 }; // ปลดล็อค
      }
      return tree;
    });

    updatedItems[selectedCategory] = categoryTrees;
    setSelectedTree({ ...selectedTree, progress: 1 }); // อัปเดตต้นไม้ใน modal
    setItems(updatedItems); // อัปเดตรายการต้นไม้ทั้งหมด
  };

  return (
    <View style={styles.outerContainer}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* ปุ่มหมวดหมู่ */}
          <View style={styles.categoryButtons}>
            {["ทั่วไป", "หายาก", "พิเศษ", "มหากาพย์", "ตำนาน"].map(
              (category) => {
                const isSelected = selectedCategory === category;
                return (
                  <TouchableOpacity
                    key={category}
                    onPress={() => handleCategorySelect(category)}
                    style={[
                      styles.categoryButton,
                      isSelected && styles.selectedButton,
                    ]}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        isSelected && styles.selectedText,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              }
            )}
          </View>

          {/* ความก้าวหน้า */}
          <Text style={styles.progressText}>
            {`ปลดล็อคแล้ว ${categoryUnlockedCount} / ${categoryTotalCount} ต้น`}
          </Text>
          {/* แสดงรายการต้นไม้ */}
          <View style={styles.itemContainer}>
            <View style={styles.itemList}>{renderItems()}</View>
          </View>
        </View>
      </SafeAreaView>

      {/* Modal แสดงรายละเอียดต้นไม้ */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {/* ปุ่มปิด */}
        <View style={styles.CloseButton}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Ionicons name="close" size={28} color="#F2B501" />
          </TouchableOpacity>
        </View>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* แสดงรายละเอียดต้นไม้ */}
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
              {selectedTree && (
                <>
                  <View style={styles.modalImageContent}>
                    <Image
                      source={
                        typeof selectedTree.imageUrl === "string"
                          ? { uri: selectedTree.imageUrl }
                          : selectedTree.imageUrl
                      }
                      style={[
                        styles.modalImage,
                        selectedTree.progress === 0 && { opacity: 0.5 },
                      ]}
                    />
                  </View>
                  {selectedTree.progress > 0 ? (
                    <>
                      <Text style={styles.modalTitle}>{selectedTree.name}</Text>
                      <Text
                        style={[
                          styles.modalRank,
                          rarityStyles[selectedTree.rank],
                        ]}
                      >
                        {selectedTree.rank}
                      </Text>
                      <Text style={styles.modalDescription}>
                        -----------------------------------
                      </Text>
                      <Text style={styles.modalDescription}>
                        {selectedTree.description}
                      </Text>
                    </>
                  ) : (
                    <>
                      <Text style={styles.modalTitleUnknown}>
                        ░▒▓██ ✖️ Unknown ✖️ ██▓▒░"
                      </Text>
                      <TouchableOpacity
                        style={styles.unlockButton}
                        onPress={handleUnlockTree}
                      >
                        <Text style={styles.unlockButtonText}>ปลดล็อค</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2B501",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    paddingBottom: 32,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  selectedButton: {
    backgroundColor: "#343334",
  },
  categoryText: {
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    color: "#FFFCF3",
  },
  selectedText: {
    color: "#fff",
  },
  progressText: {
    color: "#9B9B9B",
    fontFamily: "Mitr_Regular",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  itemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImageContent: {
    width: 280,
    height: 250,
    borderRadius: 20,
    marginBottom: 10,
    overflow: "hidden",
    backgroundColor: "#F2ECE0",
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E6D8CD",
  },
  modalImage: {
    width: 250,
    height: 250,
    resizeMode: "cover",
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 16,
    color: "#343334",
    fontFamily: "Mitr_Regular",
    marginTop: 10,
    textAlign: "center",
  },
  modalRank: {
    fontSize: 14,
    fontFamily: "Mitr_Regular",
    marginTop: 5,
    textAlign: "center",
  },
  modalDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    textAlign: "center",
    fontFamily: "Mitr_Regular",
    marginBottom: 5,
  },
  CloseButton: {
    position: "absolute",
    top: 185,
    right: 20,
    zIndex: 2,
  },
  modalCloseButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  unlockButton: {
    marginTop: 15,
    backgroundColor: "#343334",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  unlockButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Mitr_Regular",
    textAlign: "center",
  },
  modalTitleUnknown: {
    fontSize: 16,
    color: "#9B9B9B",
    fontFamily: "Mitr_Regular",
    marginTop: 10,
    textAlign: "center",
  },
});

export default TreeJournal;
