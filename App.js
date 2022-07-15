import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoHeader from "./app/components/TodoHeader";

const App = () => {
  const RootApp = () => {
    return (
      <View>
        <TodoHeader />
      </View>
    );
  };

  return (
    <View>
      <RootApp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
