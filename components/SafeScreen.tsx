import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

type Props = {
  children: React.ReactNode;
};

export const SafeScreen = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.palerBlue,
    paddingTop: Constants.statusBarHeight,
  },
});
