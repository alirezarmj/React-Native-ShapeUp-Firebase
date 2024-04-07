import { View, Text, FlatList, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";

const beginner = require("../../assets/Images/beginner.jpg");
const balance = require("../../assets/Images/balance.jpg");
const gentle = require("../../assets/Images/gentle.jpg");
const intense = require("../../assets/Images/intense.jpg");
const moderate = require("../../assets/Images/moderate.jpg");
const strength = require("../../assets/Images/strength.jpg");
const toning = require("../../assets/Images/toning.jpg");

const workoutData = [
  { id: 1, imageSource: balance, numberOfExercises: 9, title: "Balance" },
  { id: 2, imageSource: beginner, numberOfExercises: 7, title: "Beginner" },
  { id: 3, imageSource: gentle, numberOfExercises: 5, title: "Gentle" },
  { id: 4, imageSource: intense, numberOfExercises: 8, title: "Intense" },
  { id: 5, imageSource: moderate, numberOfExercises: 23, title: "Moderate" },
  { id: 6, imageSource: strength, numberOfExercises: 11, title: "Strength" },
  { id: 7, imageSource: toning, numberOfExercises: 10, title: "Toning" },
];

const CategoryItems = () => {
  const workoutRenderItems = ({ item }) => {
    return (
      <TouchableOpacity>
        <ImageBackground source={item.imageSource} className="h-36 w-40 rounded-2xl overflow-hidden mx-2 bg-pink-900">
          <View className="flex-1 justify-between m-3">
            <View className="flex-row items-center space-x-1">
              <FontAwesome6 name="dumbbell" size={24} color="white" />
              <Text className="font-bold text-white tracking-widest">{item.numberOfExercises}</Text>
            </View>
            <Text className="font-medium text-white tracking-widest">{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={workoutData} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={workoutRenderItems} />
    </View>
  );
};

export default CategoryItems;
