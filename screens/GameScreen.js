import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../component/Card";
import colorTheme from "../constants/colorTheme";

const GameScreen = () => {
  return (
    <View style={styles.rootGameScreenContainer}>
      <Text>GameScreen</Text>
      <Card style={styles.cardContainer}>
        <View style={styles.cardStyle}>
          <Text style={styles.cardTitle}>Select A Number</Text>
          <TextInput
            style={styles.cardTextInput}
            placeholder="Enter A Number"
          />
          <View style={styles.buttonContainer}>
            <Button color={colorTheme.mainThemeColor} title="cancel" />
            <Button title="confirm" />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootGameScreenContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  cardContainer: {
    marginTop: 20,
  },
  cardStyle: {
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    elevation: 7,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1,
  },
  cardTitle: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  cardTextInput: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
});

export default GameScreen;
