import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TreeList = ({ imageUrl, treeName, treeRank, isUnlocked }) => {
  return (
    <View style={styles.container}>
      <Image
        source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
        style={[styles.image, { opacity: isUnlocked ? 1 : 0.3 }]} 
      />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '30%',
      marginBottom: 10,
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
      marginBottom: 10,
      borderRadius: 10,

    },
  });
  
  export default TreeList;