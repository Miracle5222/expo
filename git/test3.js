import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  withRepeat,
} from "react-native-reanimated";
import { Home } from "./data/capstone";
import Test2 from "./git/Test2";

const { height, width } = Dimensions.get("screen");

const HEIGHT = height;
const WIDTH = width;

const App = () => {
  const [data, setData] = useState([]);

  return (
    <>
      {/* {
      key: "1",
      title: "Introduction",
      topic: [
        { lesson: 1.1, name: "A Quick First Look at Computer Programming" },
        { lesson: 1.2, name: "A Partial History of Computer Programming" },
        { lesson: 1.3, name: "Flowcharts in Programming" },
        { lesson: 1.4, name: "What is Java?" },
      ],
    }, */}
      <StatusBar />

      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.key}
          data={Home}
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity activeOpacity={0.6} style={styles.title}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                </TouchableOpacity>
                {item.topic.map((val, index) => {
                  return (
                    <TouchableOpacity activeOpacity={0.5} style={styles.topic}>
                      <Text style={styles.lesson}>Lesson: {val.lesson}</Text>
                      <Text style={styles.name}>{val.name}</Text>
                    </TouchableOpacity>
                  );
                })}
              </>
            );
          }}
        />

        {/* <View>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Introduction</Text>
            </View>
            <View style={styles.topic}>
              <Text style={styles.lesson}>lesson 1.1</Text>
              <Text style={styles.name}>
                A Quick First Look at Computer Programming
              </Text>
            </View>
          </View> */}
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0D0D0D",
  },
  box: {
    width: "90%",
  },
  textTitle: { color: "white", fontSize: 16, paddingLeft: 20 },
  title: {
    marginTop: 20,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#131313",
    borderLeftColor: "#00CDBD",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderWidth: 4,
    width: "100%",
    height: 94,
  },
  topic: {
    padding: 15,
    marginTop: 20,
    backgroundColor: "#131313",
    borderRadius: 15,
    height: 100,
    width: "90%",
    alignSelf: "flex-end",
  },
  lesson: {
    textAlign: "left",
    color: "white",
    fontSize: 14,
  },
  name: { textAlign: "left", color: "white", fontSize: 14 },
});
