import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";

import Youtube from "./app/components/YoutubeVideo";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Higlighter from "./app/components/Test3";
import SyntaxHighlighter from "react-native-syntax-highlighter"; // 2.0.0
import { atomOneLight } from "react-syntax-highlighter/styles/prism"; // 7.0.1
import Highlighter from "./app/components/Test3";
import * as Clipboard from "expo-clipboard";

const Stack = createNativeStackNavigator();

function DetailsScreen({ navigation }, props) {
  const route = useRoute();

  const { email, username } = route.params;
  const [copiedText, setCopiedText] = useState("");

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };
  const hideText = () => {
    setCopiedText("");
  };

  return (
    <View>
      <Text>Email: {email}</Text>
      <Text>username: {username}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>go to home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Code")}>
        <Text>go to Code</Text>
      </TouchableOpacity>
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Button title="Hide" onPress={hideText} />

      <View style={{ backgroundColor: "#E87A90", height: "100%" }}>
        <SyntaxHighlighter
          {...props}
          style={atomOneLight}
          customStyle={{ padding: 0, margin: 0 }}
          language="java"
          fontSize={14}
          highlighter="prism"
        >
          {copiedText}
        </SyntaxHighlighter>
      </View>
    </View>
  );
}
function CodeScreen({ navigation }) {
  return (
    <>
      <Highlighter />
    </>
  );
}

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState(" ");
  const [username, setUsername] = useState(" ");

  const handleSubmit = () => {
    navigation.navigate("Details", {
      email: email,
      username: username,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View>
          <Text>Email:</Text>
          <TextInput
            placeholder="Email..."
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View>
          <Text>Username:</Text>
          <TextInput
            placeholder="Username..."
            value={username}
            onChangeText={(e) => setUsername(e)}
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Code" component={CodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  input: {
    color: "red",
  },
});
