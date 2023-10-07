import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IntroductR2 from "./Examples/IntroductR2";
import BoxGrabHereThere from "./Examples/BoxGrabHereThere";
import ScrollViewAnim from "./Examples/ScrollViewAnim";
import { SafeAreaView } from "react-native-safe-area-context";

import InterpolateColors from "./Examples/InterpolateColors";
import AppNavigator from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
