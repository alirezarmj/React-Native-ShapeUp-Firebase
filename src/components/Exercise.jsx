import { View, Text } from "react-native";
import React from "react";
import ExerciseItems from "./ExerciseItems";
import { AntDesign } from "@expo/vector-icons";

const Exercise = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center mx-10 mb-3">
        <Text className="text-xl font-bold">Exercise</Text>
        <AntDesign name="swapright" size={30} color="black" />
      </View>
      <ExerciseItems />
    </View>
  );
};

export default Exercise;
