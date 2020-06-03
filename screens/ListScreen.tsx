import React from "react";
import { Text, View, StatusBar, FlatList } from "react-native";
import { mockProducts } from "../mocks/productsMock";
import Product from "../components/Product";
import { SafeScreen } from "../components/SafeScreen";

const ListScreen = () => {
  return (
    <SafeScreen>
      <FlatList
        data={mockProducts}
        renderItem={({ item }) => {
          const { price, img, title, description, id } = item;
          return (
            <Product
              key={id}
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
