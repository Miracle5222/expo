import React from "react";

import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Spacer = styled.View`
  padding: 5px;
`;
const Title = styled.Text`
  width: 100px;
  text-align: center;
`;

export const TopDishesCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
        }}
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
        }}
      />
      <Spacer />
      <Title>Quick Dal fry</Title>
    </View>
  );
};
