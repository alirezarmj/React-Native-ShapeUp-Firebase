import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WorkoutScreen from "./src/Screens/WorkoutScreen";
import TimerScreen from "./src/Screens/TimerScreen";
import CalculationScreen from "./src/Screens/CalculationScreen";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case "Workout":
                iconName = "dumbbell";
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              case "Timer":
                iconName = "timer-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              case "Calculation":
                iconName = "calculator-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingVertical: 5,
          },
          tabBarActiveTintColor: "aqua",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Workout" component={WorkoutScreen} />
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Calculation" component={CalculationScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabnav" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
