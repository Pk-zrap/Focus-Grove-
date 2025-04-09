import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Load from "./screen/Loading";
import Intro1 from "./screen/Intro1";
import Intro2 from "./screen/Intro2";
import Intro3 from "./screen/Intro3";
import Intro4 from "./screen/Intro4";

import Home from "./screen/Home";
import TreeJournal from "./screen/TreeJournal";
import Achievement from "./screen/Achievement";
import DailyChallenges from "./screen/DailyChallenges";
import News from "./screen/News";
import Shop from "./screen/Shop";
import RealForest from "./screen/RealForest";
import Settings from "./screen/Settings";

import DrawerNavigator from "./components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Import Drawer
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(); // Create Drawer Navigator

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsloaded] = useFonts({
    Sen: require("./assets/fonts/Sen-VariableFont_wght.ttf"),
    SenSemibold: require("./assets/fonts/Sen-SemiBold.ttf"),
    SenBold: require("./assets/fonts/Sen-Bold.ttf"),

    Mitr_Regular: require("./assets/fonts/Mitr-Regular.ttf"),
    Mitr_Semibold: require("./assets/fonts/Mitr-SemiBold.ttf"),
    Mitr_Bold: require("./assets/fonts/Mitr-Bold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);

  if (!fontsloaded) {
    return (
      <View style={styles.container}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  // Drawer Navigator function
  const DrawerNavigator = () => (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#F2B501",
          width: 270,
        },
        drawerActiveTintColor: "#343334",
        drawerInactiveTintColor: "#FFFCF3",
        drawerActiveBackgroundColor: "#FFEFC0",
        drawerType: "front",
        drawerLabelStyle: {
          fontFamily: "Mitr_Regular",
          fontSize: 16,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: "#F2B501",
          height: 105,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="สมุดบันทึกต้นไม้"
        component={TreeJournal}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ความท้าทายประจำวัน"
        component={DailyChallenges}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome6 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ความสำเร็จ"
        component={Achievement}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="trophy" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ร้านค้า"
        component={Shop}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ข่าวสาร"
        component={News}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="ปลูกต้นไม้ในป่า"
        component={RealForest}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tree"size={25} color={color} />   
          ),
        }}
      />
      <Drawer.Screen
        name="การตั้งค่า"
        component={Settings}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Loading"
            component={Load}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Intro1"
              component={Intro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro2"
              component={Intro2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro3"
              component={Intro3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro4"
              component={Intro4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DrawerNavigator"
              component={DrawerNavigator}
              options={{ headerShown: false }} 
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F5",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
