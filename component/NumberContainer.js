import React from "react";
import { View, StyleSheet, Text } from "react-native";

const NumberContainer = ({ text, number }) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.containerHeaderText}>{text}</Text>
      <View style={styles.wrapperComponent}>
        <Text style={styles.textWrapper}>{number}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  wrapperComponent: {
    borderWidth: 3,
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
    borderBottomColor: "blue",
    borderLeftColor: "yellow",
    borderRightColor: "red",
    borderTopColor: "green",
  },
  textWrapper: {
    fontSize: 30,
  },
  containerHeaderText: {
    marginTop: 30,
    fontSize: 20,
    color: "grey",
    fontFamily: "shortBaby-font",
  },
});

export default NumberContainer;
