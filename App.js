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
import Settings from "./screen/Settings";

import DrawerNavigator from "./components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"; // Import Drawer
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator(); // Create Drawer Navigator

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsloaded] = useFonts({
    Sen: require("./assets/fonts/Sen-VariableFont_wght.ttf"),
    Mitr_Regular: require("./assets/fonts/Mitr-Regular.ttf"),
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
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="สมุดบันทึกต้นไม้" component={TreeJournal} />
      <Drawer.Screen name="ความท้าทายประจำวัน" component={DailyChallenges} />
      <Drawer.Screen name="ความสำเร็จ" component={Achievement} />
      <Drawer.Screen name="ร้านค้า" component={Shop} />
      <Drawer.Screen name="ข่าวสาร" component={News} />
      <Drawer.Screen name="การตั้งค่า" component={Settings} />
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
              component={DrawerNavigator} // Show Drawer Navigation in this screen
              options={{ headerShown: false }} // Optional, depending on your UI design
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
