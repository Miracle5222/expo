import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

import { Search } from "../components/search.component";
import { Container, CatText, Spacer } from "./style/styles.style";
import { TopDishesCard } from "../components/topDishes.component";
import { CardCom } from "../components/card.component";
import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);

  //   useEffect(async () => {
  //     try {
  //       const query = '*[_type == "recipe"]';
  //       const recipes = await client.fetch(query);
  //       setRecipes(recipes);
  //     } catch (error) {
  //       console.warn(error);
  //     }
  //   }, []);

  useEffect(() => {
    client.fetch(`*[_type == "recipes"]`).then((data) => {
      setRecipes(data);
    });
  }, []);

  return (
    <View>
      <Container>
        <Search placeholder="Search recipes" />
        <Spacer />

        <Spacer />
        <TopDishesCard />
        <Spacer />

        {recipes.map((recipe, index) => {
          return (
            <>
              <CardCom
                key={index}
                title={recipe.title}
                imageUrl={urlFor(recipe.image).url()}
              />
              {recipe.ingridients.map((ingri) => (
                <CatText>{}</CatText>
              ))}
            </>
          );
        })}
      </Container>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
