import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import Constants from "expo-constants";

type Props = {
  children: React.ReactNode;
};

export const SafeScreen = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

