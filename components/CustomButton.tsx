import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  styleProp: ViewStyle;
};

export const CustomButton = ({ styleProp }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      ...styleProp,
    },
  });
  return <View style={styles.container} />;
};
