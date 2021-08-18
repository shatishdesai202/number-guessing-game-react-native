import React from "react";
import { Button, View, StyleSheet } from "react-native";

const ButtonCard = ({ nextGuessHandler }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuessHandler("LOWER")} />
        <Button title="GREATER" onPress={() => nextGuessHandler("GREATER")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    elevation: 7,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
    borderRadius: 30,
  },
});

export default ButtonCard;
