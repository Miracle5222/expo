import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter"; // 2.0.0
import { atomOneLight } from "react-syntax-highlighter/styles/prism"; // 7.0.1
import * as Clipboard from "expo-clipboard";

const code = `class Modulus {
  public static void main(String args[]) {
  int x = 42;
  double y = 42.25;
  System.out.println("x mod 10 = " + x % 10);
  System.out.println("y mod 10 = " + y % 10);
  }
  }
`;

const Highlighter = (props) => {
  const [state, setState] = useState(code);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(state);
  };

  return (
    <View style={{ backgroundColor: "#E87A90", height: "100%" }}>
      <SyntaxHighlighter
        {...props}
        style={atomOneLight}
        customStyle={{ padding: 0, margin: 0 }}
        language="java"
        fontSize={14}
        highlighter="prism"
      >
        {state}
      </SyntaxHighlighter>
      <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
        <Text>Copy Code</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Highlighter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 15,
    backgroundColor: "orangered",
  },
});
