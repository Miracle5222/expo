import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/capstone/")

      .then(function (response) {
        console.log(response);
        setState(response.data.data);
        console.log(state.title);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [state]);

  // useEffect(() => {
  //   let Data = {
  //     name: "Roneil",
  //   };
  //   let headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   };
  //   fetch("http://localhost/capstone/response", {
  //     method: "POST",
  //     header: headers,
  //     body: JSON.stringify(Data),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => alert(response[0].Message))
  //     .catch((error) => alert("Error Occured" + error));
  // }, []);
  return (
    <View>
      <Text>{state.title}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
