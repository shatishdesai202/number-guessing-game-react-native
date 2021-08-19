import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { InfoText } from "../constants/customFont";
import { Ionicons } from "@expo/vector-icons";

const GameOverScreen = ({ selectedNumber, totalRound, resetGame }) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageBox}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/images/victory.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <InfoText>Your Selected Number: {selectedNumber}</InfoText>
        <InfoText>Total Round: {totalRound}</InfoText>
      </View>

      <Ionicons
        name="reload-circle"
        size={24}
        color="black"
        onPress={() => resetGame()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageBox: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 40,
  },
  imageContainer: {
    height: 200,
    width: 200,
    alignItems: "center",
    borderRadius: 40,
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
});

export default GameOverScreen;
