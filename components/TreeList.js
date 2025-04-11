import React, { useRef } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const TreeList = ({ imageUrl, treeName, treeRank, isUnlocked, onPress }) => {
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
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.touchArea, { transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.container}>
          <Image
            source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
            style={[styles.image, { opacity: isUnlocked ? 1 : 0.3 }]}
          />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  touchArea: {
    width: '30%',
    marginBottom: 15,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 10,
  },
  treeName: {
    fontSize: 12,
    fontFamily: 'Mitr_Regular',
    color: '#333',
    textAlign: 'center',
  },
  treeRank: {
    fontSize: 11,
    fontFamily: 'Mitr_Regular',
    color: '#999',
    textAlign: 'center',
  },
});

export default TreeList;
