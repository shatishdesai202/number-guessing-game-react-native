import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colorTheme from "../constants/colorTheme";

const Header = () => {
  return (
    <View style={styles.rootHeaderContainer}>
      <Text style={styles.headerText}>Guess A Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootHeaderContainer: {
    width: "100%",
    paddingTop: 30,
    backgroundColor: colorTheme.mainThemeColor,
    alignItems: "center",
  },
  headerText: {
    padding: 15,
    fontSize:20
  },
});

export default Header;
