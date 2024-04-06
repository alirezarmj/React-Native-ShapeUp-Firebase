import { View, Text } from "react-native";
import React from "react";
import Welcome from "../components/Welcome";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutOTD from "../components/WorkoutOTD";

const WorkoutScreen = () => {
  return (
    <SafeAreaView className="mx-[1%]">
      <Welcome />
      <WorkoutOTD />
    </SafeAreaView>
  );
};

export default WorkoutScreen;
