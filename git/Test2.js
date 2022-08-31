import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import DATA from "../data";
import { useEffect, useRef, useState } from "react";

const { width, height } = Dimensions.get("screen");
const Test2 = () => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={DATA}
        horizontal
        initialScrollIndex={index}
        pagingEnabled={true}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                styles.container,
                { width, height, backgroundColor: "#0D0D0D" },
              ]}
            >
              <View style={styles.itemContainer}>
                <Text style={styles.categories}>{item.category}</Text>
                <Text style={styles.h1}>{item.h1}</Text>
                <Text style={styles.h2}>{item.h2}</Text>
              </View>
              
            </View>
          );
        }}
      />
    </View>
  );
};

export default Test2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  categories: {
    fontSize: 22,
    paddingVertical: 10,
    color: "#44D600",
  },
  itemContainer: {
    backgroundColor: "#131313",
    padding: 12,
    width: "88%",
  },
  h1: {
    paddingVertical: 15,
    lineHeight: 25,

    textAlign: "left",
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  h2: {
    paddingVertical: 15,
    lineHeight: 20,
    textAlign: "left",
    fontSize: 14,
    fontWeight: "400",
    color: "white",
  },

  item: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
