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
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const Size = 100.0;
const Circle_Radius = Size * 2;
export default function BoxGrabHereThere({ navigation }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event) => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)

      if (distance < Circle_Radius + Size / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }

    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
      // width:Size * 2
    };
  });
  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, rStyle]} />
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
      <Button onPress={() => navigation.navigate("scroll")} title="next animation" />

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
  square: {
    width: Size,
    height: Size,
    backgroundColor: "rgba(0,0,256,0.5)",
    borderRadius: 20,
  },
  circle: {
    width: Circle_Radius * 2,
    height: Circle_Radius * 2,
    // backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Circle_Radius,
    borderWidth: 5,
    borderColor: "rgba(0,0,256,0.5)",
    marginBottom: 40,
  },
});