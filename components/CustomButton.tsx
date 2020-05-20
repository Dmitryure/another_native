import React from "react";
import { StyleSheet, View } from "react-native";

export const CustomButton = ({styleProp} : StyleSheet.NamedStyles<any>) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      ...styleProp,
    },
  });
  return <View style={styles.container} />;
};
