import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Stars } from "./Stars";
/* types */
import { Shop } from "../types/shops";
/* components */

type Props = {
  shop: Shop;
};

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

export const ShopDetail: React.FC<Props> = ({ shop }: Props) => {
  const { name, place, imageUrl, score } = shop;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }}></Image>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.place}>{place}</Text>
      </View>
      <Stars score={score} starSize={36} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
  },
  name: {
    fontSize: 24,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#000",
  },
  place: {
    fontSize: 16,
    paddingBottom: 8,
    color: "#888",
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.7,
  },
});
