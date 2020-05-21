import React from "react";
import { StyleSheet, Text, ViewStyle, TouchableOpacity } from "react-native";

type Props = {
  styleProp: ViewStyle;
  text: string;
  onPress: Function;
};

export const CustomButton = ({ styleProp, text, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styleProp]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 20,
  },
  text: {
    justifyContent: "center",
    fontSize: 20,
  },
});
