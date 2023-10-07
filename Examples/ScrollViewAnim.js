import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Page from "../components/Page";

const WORDS = ["what's", "up", "Mobile", "devs?"];

export default function ScrollViewAnim({ navigation }) {
  const translateX = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x
  })

  return (
    <Animated.ScrollView
      pagingEnabled
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal style={styles.container}>

      {WORDS.map((title, index) => {
        return <Page key={index.toString()} title={title} navigation={navigation} index={index} translateX={translateX} />;
      })}

    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
