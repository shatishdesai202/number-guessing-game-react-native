import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const HeaderText = (props) => (
  <Text style={{ ...styles.headerText, ...props.style }}>{props.children}</Text>
);

export const TitleText = (props) => (
  <Text style={{ ...styles.titleText, ...props.style }}>{props.children}</Text>
);

export const InfoText = (props) => (
  <Text style={{ ...styles.infoText, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "freedom-font",
    fontSize: 25,
  },
  titleText: {
    fontFamily: "shortBaby-font",
  },
  infoText: {
    fontFamily: "shortBaby-font",
    fontSize: 19,
    marginTop: 10,
    marginBottom: 10,
  },
});
