import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import Slider from "@react-native-community/slider";

const Home = () => {
  const [coins, setCoins] = useState(10);
  const [selectedPlant, setSelectedPlant] = useState("ต้นไม้");
  const [selectedTime, setSelectedTime] = useState(180);
  const [selectedTag, setSelectedTag] = useState(null);
  const [timer, setTimer] = useState(selectedTime * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isTimerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsTimerRunning(false);
      alert("ครบกำหนดเวลา!");
    }
  }, [isTimerRunning, timer]);

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeChange = (value) => {
    setSelectedTime(Math.round(value));
    setTimer(Math.round(value) * 60);
  };

  const animateCircle = () => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    animateCircle();
  }, []);

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.coinText}>Coins: {coins}</Text>
      </View>

      <Animated.View
        style={[styles.circle, { transform: [{ rotate: rotation }] }]}
      >
        <Text style={styles.plantText}>{selectedPlant}</Text>
        <Slider
          style={{ width: 180, height: 40 }}
          minimumValue={10}
          maximumValue={180}
          step={1}
          value={selectedTime}
          onValueChange={handleTimeChange}
        />
      </Animated.View>

      <View style={styles.tagContainer}>
        {["แท็ก 1", "แท็ก 2", "แท็ก 3"].map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, selectedTag === tag && styles.selectedTag]}
            onPress={() => setSelectedTag(tag)}
          >
            <Text>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.timerText}>
        {timer !== null
          ? formatTime(timer)
          : selectedTime
          ? `${selectedTime}:00`
          : "0:00"}
      </Text>

      <TouchableOpacity style={styles.startButton} onPress={startTimer}>
        <Text style={styles.startButtonText}>ปลูก</Text>
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
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  coinText: {
    fontSize: 18,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  plantText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  tag: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedTag: {
    backgroundColor: "lightblue",
  },
  timerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Home;
