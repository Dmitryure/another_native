import React from "react";
import { Text, View, StatusBar, FlatList } from "react-native";
import { mockProducts } from "../mocks/productsMock";
import Product from "../components/Product";
import { SafeScreen } from "../components/SafeScreen";

const ListScreen = () => {
  console.log(StatusBar.currentHeight);
  return (
    <SafeScreen>
      <FlatList
        data={mockProducts}
        renderItem={({ item }) => {
          const { price, img, title, description } = item;
          return (
            <Product
              price={price}
              description={description}
              img={img}
              title={title}
            />
          );
        }}
      />
    </SafeScreen>
  );
};

export default ListScreen;
