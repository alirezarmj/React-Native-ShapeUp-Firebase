import { View, Text, Alert, ActivityIndicator, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Screen from "../components/Screen";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../Firebase/config";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlashList } from "@shopify/flash-list";
import { Audio } from "expo-av";
import BackButton from "../components/BackButton";

const countDownAudio = require("../../assets/audio/countdownaudio.mp3");

const ExerciseScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  const initialTime = 60;
  const minTime = 10;

  const [gifUrl, setGifUrl] = useState(null);
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [countDownSound, setCountDownSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(countDownAudio);
    setCountDownSound(sound);
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        setIsAudioPlaying(false);
      }
    });
    await sound.playAsync();
    setIsAudioPlaying(true);
  }

  const fetchGifUrl = async () => {
    try {
      const storageRef = ref(storage, `AllExercies/${item.gif_url}`);
      const url = await getDownloadURL(storageRef);
      setGifUrl(url);
      //   console.log("url", url);
    } catch (error) {
      Alert.alert("Fatching failed!", `something went wrong ${error.message}`);
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchGifUrl();
  }, []);

  const handleIncreaseTime = () => {
    if (!isRunning) setTime((prev) => prev + 10);
  };
  const handleDecreaseTime = () => {
    if (!isRunning && time > minTime) setTime((prev) => prev - 10);
  };
  const handleResetTime = () => {
    setIsRunning(false);
    setIsFirstTime(true);
    setTime(initialTime);
    if (countDownSound && isAudioPlaying) {
      countDownSound.stopAsync();
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    let countDownInterval;
    if (isRunning && time > 0) {
      countDownInterval = setInterval(() => {
        setTime((prev) => prev - 1);
        if (time === 4) {
          // console.log("time is 4");
          playSound();
        }
      }, 1000);
    } else {
      setIsRunning(false);
      clearInterval(countDownInterval);
    }
    return () => {
      clearInterval(countDownInterval);
    };
  }, [time, isRunning]);
  const handleStart = () => {
    if (!isRunning && isFirstTime) {
      setIsFirstTime(false);
      setIsRunning(true);
    } else {
      setIsRunning(true);
    }
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  return (
    <Screen>
      {gifUrl ? (
        <Image source={{ uri: gifUrl }} className="w-full h-80" />
      ) : (
        <View className="justify-center items-center w-full h-80">
          <ActivityIndicator size={"large"} color={"gray"} />
        </View>
      )}
      <BackButton />
      <ScrollView>
        <View className="mt-4 mx-3">
          <Text className="text-2xl font-bold text-center">{item.title}</Text>
          <View className="flex-row">
            {item.category.split(",").map((cat, index) => (
              <View key={index} className="mr-2">
                <View className="bg-gray-300 px-2 rounded-md overflow-hidden">
                  <Text className="text-fuchsia-500">#{cat}</Text>
                </View>
              </View>
            ))}
          </View>

          <View className="flex-row items-center space-x-2 mt-2">
            <Text className="font-semibold text-blue-500">Intensity:</Text>
            <Text className="text-cyan-400 italic text-base">{item.intensity}</Text>
          </View>
          <Text className="mt-4 font-semibold text-xl">Instructions:</Text>
          <View className="mt-2">
            {item.instructions.map((instruction) => (
              <View key={instruction.step} className="flex-row items-center mb-1">
                <Text className="text-gray-600 text-base">{instruction.step}.</Text>
                <Text className="ml-2 text-base">{instruction.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className="mt-4 flex-row justify-center items-center space-x-2">
          <TouchableOpacity onPress={handleDecreaseTime} className="w-12 h-12 rounded-full bg-gray-300 items-center justify-center">
            <Text className="text-red-500 text-3xl">-</Text>
          </TouchableOpacity>
          <Text className="text-xl font-bold">{time} Secs</Text>
          <TouchableOpacity onPress={handleIncreaseTime} className="w-12 h-12 rounded-full bg-gray-300 items-center justify-center">
            <Text className="text-green-500 text-3xl">+</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row mt-4 mb-10 justify-center items-center space-x-4">
          <TouchableOpacity disabled={time === 0} onPress={isRunning ? handlePause : handleStart}>
            <Text className={`text-blue-500  text-xl py-2 border rounded-lg border-blue-500 px-4 ${time === 0 ? "opacity-40" : ""} `}>{isRunning ? "Pause" : "Start"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResetTime}>
            <Text className="text-gray-500 text-xl py-2 border rounded-lg border-gray-500 px-4">Reset</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ExerciseScreen;
