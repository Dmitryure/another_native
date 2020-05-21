import React from "react";
import { NavigationScreenConfigProps } from "react-navigation";
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CustomButton } from "../components/CustomButton";

import colors from "../config/config";

const HomeScreen = ({ navigation }: NavigationScreenConfigProps<any>) => {
  return (
    <>
      <View style={styles.container}>
        {/*  difference between image and imageBackground*/}
        <Image
          style={styles.image}
          source={require("../assets/homescreenpic.jpg")}
        />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text>WTF is written here...</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <CustomButton
            styleProp={{ backgroundColor: colors.palePink }}
            text="Login"
          />
          <CustomButton
            styleProp={{ backgroundColor: colors.paleGreen }}
            text="Register"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    top: "10%",
  },
  buttonsContainer: {
    flex: 0.2,
  },
});

export default HomeScreen;
