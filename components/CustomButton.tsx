import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type Props = {
  styleProp: ViewStyle;
  text: string;
};

export const CustomButton = ({ styleProp, text }: Props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      borderRadius: 20,
      ...styleProp,
    },
    text: {
      justifyContent: "center",
      fontSize: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
