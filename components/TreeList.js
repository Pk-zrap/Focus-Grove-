import React, { useRef } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const TreeList = ({ imageUrl, isUnlocked, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  // ตรวจสอบว่า imageUrl เป็น string หรือไม่
  const imageSource = typeof imageUrl === 'string'
  ? { uri: imageUrl }
  : imageUrl;


  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.touchArea, { transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.container}>
        <Image
            source={imageSource}
            style={[styles.image, !isUnlocked && styles.lockedImage]}
          />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  touchArea: {
    width: '30%',
    marginBottom: 10,
    marginHorizontal: 1,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
    marginBottom: 1,
  },
  lockedImage: {
    opacity: 0.3,
  },
});

export default TreeList;
