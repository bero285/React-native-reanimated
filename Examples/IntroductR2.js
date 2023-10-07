import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
// import {
//   GestureHandlerRootView,
//   PanGestureHandler,
//   PanGestureHandlerGestureEvent,
// } from "react-native-gesture-handler";


const Size = 100.0;
export default function IntroductR2({ navigation }) {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const handleRotation = (progress) => {
    "worklet";
    return "" + progress.value * 2 * Math.PI + "rad";
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * Size) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: Size, width: Size, backgroundColor: "blue", marginBottom: 72, },
          reanimatedStyle,
        ]}
      />
      <Button onPress={() => navigation.navigate("box")} title="next animation" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
