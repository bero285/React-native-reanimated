import { Dimensions, StyleSheet, Switch, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  interpolate,
  interpolateColor,
  set,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Colors = {
  dark: {
    backgroundColor: "#1E1E1E",
    circle: "#252525",
    text: "#F8F8F8",
  },
  light: {
    backgroundColor: "#F8F8F8",
    circle: "#fff",
    text: "#1E1E1E",
  },
};

const SWITH_TRACK_COLOR = {
  true: "rgba(256,0,256,0.2)",
  false: "rgba(0,0,0,0.1)",
};

export default function InterpolateColors({ navigation }) {
  const [theme, setTheme] = useState("light");

  // const progress = useSharedValue(0)
  const progress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1) : withTiming(0);
  }, [theme]);
  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.backgroundColor, Colors.dark.backgroundColor]
    );
    return {
      backgroundColor,
    };
  });
  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );
    return {
      backgroundColor,
    };
  });
  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]
    );
    return {
      color,
    };
  });
  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.text, rTextStyle]}>THEME</Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          value={theme === "dark"}
          onValueChange={(toggled) => {
            setTheme(toggled ? "dark" : "light");
          }}
          trackColor={SWITH_TRACK_COLOR}
          thumbColor="violet"
        />
      </Animated.View>
      <Button onPress={() => navigation.navigate("intro")} title="next animation" />

    </Animated.View>
  );
}

const Size = Dimensions.get('window').width * 0.7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red",
    // borderWidth:5,
    // borderColor:"red"
  },
  circle: {
    width: Size,
    height: Size,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Size / 2,
    elevation: 9,
    marginBottom: 40,
  },
  text: {
    fontSize: 70,
    textTransform: "uppercase",
    fontWeight: 700,
    marginBottom: 25,
  }
});
