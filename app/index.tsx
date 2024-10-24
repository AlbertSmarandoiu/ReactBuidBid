import { Redirect } from "expo-router";
import { Text,_View } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Index() {
    return <Redirect href="/home" />;  // Ensure "/home" matches the route configuration
  }