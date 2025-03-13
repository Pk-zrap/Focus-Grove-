import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Load from "./screen/Loading";
import Intro1 from "./screen/Intro1";
import Intro2 from "./screen/Intro2";
import Intro3 from "./screen/Intro3";
import Intro4 from "./screen/Intro4";
import Home from "./screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsloaded] = useFonts({
    Sen: require("./assets/fonts/Sen-VariableFont_wght.ttf"),
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
              name="Home"
              component={Home}
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
