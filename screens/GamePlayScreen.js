import React, { useState, useRef, useEffect } from "react";
import { View, Alert } from "react-native";
import ButtonCard from "../component/ButtonCard";
import NumberContainer from "../component/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  let minValue = Math.ceil(min);
  let maxValue = Math.floor(max);
  let randomNumber =
    Math.floor(Math.random() * (maxValue - minValue)) + minValue;

  if (randomNumber === exclude) {
    generateRandomNumber(minValue, maxValue, exclude);
  } else {
    return randomNumber;
  }
};

const GamePlayScreen = ({
  selectedNumber,
  guessRoundCounter,
  setGuessRoundCounter,
}) => {
  const [guessNumber, setGuessNumber] = useState(
    generateRandomNumber(1, 100, selectedNumber)
  );
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (guessNumber === selectedNumber) {
      setGuessRoundCounter(counter);
    }
  });

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "LOWER" && guessNumber < selectedNumber) ||
      (direction === "GREATER" && guessNumber > selectedNumber)
    ) {
      Alert.alert("Don't Lie!", "You know this is wrong....", [
        { text: "Sorry! Dude", style: "cancel" },
      ]);
      return;
    }
    if (direction === "LOWER") {
      currentHigh.current = guessNumber;
    } else {
      currentLow.current = guessNumber;
    }
    setGuessNumber(
      generateRandomNumber(currentLow.current, currentHigh.current, guessNumber)
    );
    setCounter((counter) => counter + 1);
  };

  return (
    <View>
      <NumberContainer text={"Opponent's Guess"} number={guessNumber} />
      <ButtonCard nextGuessHandler={nextGuessHandler} />
    </View>
  );
};

export default GamePlayScreen;
