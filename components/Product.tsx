import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import fontSizes from "../config/fontSizes";

import { product } from "../types/product";
import BoxOfImages from "./BoxOfImages";

const Product = ({ title, description, img, price }: product) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <BoxOfImages img={img}/>
      <View style={styles.lowerContainer}>
        <Text numberOfLines={1} style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleBlue,
    margin: 10,
    borderRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: fontSizes.bigFont,
    padding: 15,
  },
  description: {
    fontSize: fontSizes.mediumFont,
    flex: 0.7,
  },
  price: {
    fontSize: fontSizes.mediumFont,
    flex: 0.2,
  },
  lowerContainer: {
    flex: 1,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default Product;
