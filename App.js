import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./component/Card";

import Header from "./component/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GamePlayScreen from "./screens/GamePlayScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRoundCounter, setGuessRoundCounter] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const restartGame = () => {
    setUserNumber();
    setGuessRoundCounter(0);
  };

  return (
    <View style={styles.rootContainer}>
      <Header />
      <View style={styles.gameScreenContainer}>
        {!userNumber ? (
          <GameScreen onStartGame={startGameHandler} />
        ) : guessRoundCounter <= 0 ? (
          <GamePlayScreen
            selectedNumber={userNumber}
            setGuessRoundCounter={setGuessRoundCounter}
            guessRoundCounter={guessRoundCounter}
          />
        ) : (
          <GameOverScreen
            selectedNumber={userNumber}
            totalRound={guessRoundCounter}
            resetGame={restartGame}
          />
        )}
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
