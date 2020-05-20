import React from "react";
import { NavigationScreenConfigProps } from "react-navigation";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import { CustomButton } from "../components/CustomButton";

const HomeScreen = ({ navigation }: NavigationScreenConfigProps<any>) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/homescreenpic.jpg")}
        />
        <CustomButton styleProp={{ backgroundColor: "dodgerblue" }} />
        <CustomButton styleProp={{ backgroundColor: "gold" }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "85%",
  },
});

export default HomeScreen;
