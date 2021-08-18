import React from "react";
import { StyleSheet, View } from "react-native";

const ConfirmValueBox = (props) => {
  return (
    <View style={{ ...props.style, ...styles.rootContainer }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});

export default ConfirmValueBox;
