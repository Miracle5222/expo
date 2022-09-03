import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("screen");
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <Text>Email:</Text>
          <TextInput type="email" placeholder="Email..." />
        </View>
        <View>
          <Text>Email:</Text>
          <TextInput type="Username" placeholder="Username..." />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 15,
    width: (width / 2) * 1.5,
    backgroundColor: "#f6f7f5",
  },
  button: {
    marginTop: 10,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "orangered",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
