import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import DailyLogin from "../components/DailyLogin";
import DailyChallengesList from "../components/DailyChallengesList";
import MonthlyTreeReward from "../components/MonthlyTreeReward";

const DailyChallenges = () => {
  const dailyChallenges = [
    {
      id: 1,
      challengeName: "ปลูกต้นไม้ให้ครบ 3 ต้น",
      current: 3,
      total: 3,
      imageUrl: require("../assets/TreeA.jpeg"),
      rewards: [
        {
          type: "coin",
          amount: 50,
          name: "NatureCoins",
          image: require("../assets/NatureCoins.png"),
        },
      ],
    },
    {
      id: 2,
      challengeName: "ฝึกสมาธิ 30 นาที",
      current: 15,
      total: 30,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดปริศนา",
          image: require("../assets/Intro/Intro2.png"),
        },
      ],
    },
    {
      id: 3,
      challengeName: "โฟกัสแท็ก 'งาน' ให้ครบ 30 นาที",
      current: 15,
      total: 30,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดงาน",
          image: require("../assets/Intro/Intro2.png"),
        },
      ],
    },
    {
      id: 4,
      challengeName: "ฝึกสมาธิ 3 ชั่วโมง",
      current: 15,
      total: 180,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "เมล็ดทั่วไป",
          image: require("../assets/Seed/Seed_Common.png"),
        },
      ],
    },
    {
      id: 5,
      challengeName: "ฝึกสมาธิก่อนนอน",
      current: 15,
      total: 15,
      imageUrl: require("../assets/Timer.jpeg"),
      rewards: [
        {
          type: "seed",
          amount: 1,
          name: "ต้นฝันดี",
          image: require("../assets/Tree/Rare_GoodnightTree.png"),
        },
      ],
    },
  ];

  const [hasClaimedTree, setHasClaimedTree] = useState(false);
  const loginDaysThisMonth = 10;
  const treeDetails = {
    treeName: "เห็ดกระจกแห่งมิติ",
    treeImage: require("../assets/Tree/Uncommon_DimensionalMirrorMushroom.png"),
    description: "ทำกิจกรรมประจำวันให้ครบ 15 ครั้งเพื่อรับ ",
    requiredDays: 15,
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.yellowTopSection}>
        {/* Monthly Tree Reward */}
        <MonthlyTreeReward
          loginDaysThisMonth={loginDaysThisMonth}
          hasClaimed={hasClaimedTree}
          treeName={treeDetails.treeName}
          treeImage={treeDetails.treeImage}
          requiredDays={treeDetails.requiredDays}
          description={treeDetails.description}
          onClaimReward={() => setHasClaimedTree(true)}
        />
      </View>
      <View style={styles.containerDaily}>
        {/* Daily Login */}
        <DailyLogin />
        {/* Daily Challenges List */}
        <View style={styles.challengesList}>
          <Text style={styles.title}>กิจกรรมประจำวัน</Text>
          {dailyChallenges.map((item) => (
            <DailyChallengesList
              key={item.id}
              challengeName={item.challengeName}
              current={item.current}
              total={item.total}
              imageUrl={item.imageUrl}
              rewards={item.rewards}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E8E8",
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#343334",
    fontFamily: "Mitr_Regular",
  },
  containerDaily:{
    padding: 20,
  },
  challengesList: {
    marginTop: 20,
  },
  yellowTopSection: {
    backgroundColor: "#F2B501",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});

export default DailyChallenges;
