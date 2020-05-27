import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { product } from "../types/product";

const Product = ({ title, description, img, price }: product) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={img} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "80%",
  },
  container: {},
  title: {},
  description: {},
  price: {},
});

export default Product;
