import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
const Size = width * 0.7;

export default function Page({ index, title, translateX, navigation }) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, Size / 2, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale: scale }],
      borderRadius: borderRadius,
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 1, -height / 2],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateY }],
      opacity: opacity,
    };
  });

  return (
    <View
      style={[
        { backgroundColor: "rgba(0,0,256,0." + index + 2 + ")" },
        styles.pageContainer,
      ]}
    >
      <Animated.View style={[styles.square, rStyle]}>

        <Animated.View style={[{ position: "absolute" }, rTextStyle]}>
          <Text style={styles.text}>{title}</Text>
        </Animated.View>
      </Animated.View>
      <Button onPress={() => navigation.navigate("interpol")} title="next animation" />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    height: Size,
    width: Size,
    backgroundColor: "rgba(0,0,256,0.4)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  text: {
    fontSize: 70,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
  },

});
