import { View, Text } from "react-native";
import React from "react";
import Welcome from "../components/Welcome";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutOTD from "../components/WorkoutOTD";
import Separator from "../components/Separator";
import Category from "../components/Category";
import Exercise from "../components/Exercise";
import { ScrollView } from "react-native-gesture-handler";

const WorkoutScreen = () => {
  return (
    <SafeAreaView className="mx-[1%]">
      <Welcome />
      <ScrollView>
        <WorkoutOTD />
        <Separator />
        <Category />
        <Separator />
        <Exercise />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutScreen;
