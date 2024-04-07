import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-10 left-2">
      <Feather name="arrow-left-circle" size={40} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
