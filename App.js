import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./component/Header";
import GameScreen from "./screens/GameScreen";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <Header />
      <View style={styles.gameScreenContainer}>
        <GameScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  gameScreenContainer: {
    width: "100%",
    flex: 1,
  },
});
