import { View, Text } from "react-native";
import React from "react";
import { useFonts, Caveat_400Regular } from "@expo-google-fonts/caveat";

const Welcome = () => {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });
  if (!fontsLoaded) return null;
  return (
    <View>
      <Text style={{ fontFamily: "Caveat_400Regular", fontSize: 35, textAlign: "center", color: "#92400e" }}>Welcome</Text>
    </View>
  );
};

export default Welcome;
