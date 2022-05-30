import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";

const SIZE = 100.0;

export default function App() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(0.5), -1, true);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "orangered" },
          reanimatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
