import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameOverScreen = ({ selectedNumber, totalRound, resetGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Text>Your Selected Number: {selectedNumber}</Text>
      <Text>Total Round: {totalRound}</Text>
      <Button title="New Game" onPress={() => resetGame()} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default GameOverScreen;
