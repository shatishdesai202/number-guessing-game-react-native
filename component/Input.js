import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput style={{ ...props.style, ...styles.inputStyle }} {...props} />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: "grey",
    marginVertical: 10,
    width: 1,
    borderWidth: 5,
  },
});

export default Input;
