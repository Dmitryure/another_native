import { Image, ImageSourcePropType, StyleSheet, FlatList } from "react-native";
import React from "react";

type Props = {
  img: ImageSourcePropType[];
};
// <Image resizeMode={"cover"} style={styles.image} source={img} />;
const BoxOfImages = ({ img }: Props) => {
  return (
    <FlatList
      horizontal
      data={img}
      renderItem={({ item }) => {
        return (
          <Image resizeMode={"cover"} style={styles.image} source={item} />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    width: 250,
    alignSelf: "center",
    borderRadius: 10,
    margin: 20,
  },
});

export default BoxOfImages;
