import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colorTheme from "../constants/colorTheme";
import { HeaderText } from "../constants/customFont";

const Header = () => {
  return (
    <View style={styles.rootHeaderContainer}>
      <HeaderText style={styles.headerText}>
        <Text>Number Guessing App</Text>
      </HeaderText>
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
    fontSize: 25,
  },
});

export default Header;
