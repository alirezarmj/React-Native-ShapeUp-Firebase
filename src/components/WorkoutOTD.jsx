import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import workOTD from "../../assets/Images/workoutotd.jpg";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
const WorkoutOTD = () => {
  let [fontsLoaded] = useFonts({
    Lato_400Regular,
  });
  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity className="justify-center items-center">
      <View className="w-[80%] h-40 overflow-hidden rounded-3xl">
        <ImageBackground source={workOTD} className="flex-1 justify-center items-center " resizeMode="cover">
          <View>
            <Text
              className="text-white text-2xl tracking-tighter"
              style={{
                fontFamily: "Lato_400Regular",
              }}
            >
              Workout Of The Day
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutOTD;
