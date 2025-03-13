import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/plant.png')} style={styles.plantImage} />
        <Text style={styles.title}>Stoneshard</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>เริ่มต้นการโฟกัส</Text>
        <Text style={styles.description}>
          เริ่มต้นการเดินทางแห่งการโฟกัสของคุณ
          ปลูกต้นไม้แห่งสมาธิและเติบโตไปพร้อมกัน
        </Text>
        <View style={styles.dotsContainer}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around', // จัดองค์ประกอบให้มีระยะห่างเท่ากัน
  },
  imageContainer: {
    alignItems: 'center',
  },
  plantImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red', // สีแดงตามรูป
  },
  textContainer: {
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  skipButton: {
    alignItems: 'center',
  },
  skipText: {
    color: 'gray',
    marginTop: 10,
  },
});

export default Home;