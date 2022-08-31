import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";

const Test1 = () => {
  const progress = useSharedValue(1);
  const up = useSharedValue(1);

  const anime = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: up.value }],
    };
  }, []);

  const opa = () => {
    up.value = withSpring(-Math.random() * 250, { duration: 500 });
  };

  const opa1 = () => {
    up.value = withSpring(1, { duration: 2000 });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, anime]}></Animated.View>
      <Button onPress={opa} title="opacity" />
      <Button onPress={opa1} title="opacity1" />
    </View>
  );
};

export default Test1;

const SIZE = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderRadius: SIZE,
    width: SIZE,
    height: SIZE,
    backgroundColor: "orangered",
  },
});
