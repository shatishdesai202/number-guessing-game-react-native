import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../component/Card";
import ConfirmValueBox from "../component/ConfirmValueBox";
import Input from "../component/Input";
import colorTheme from "../constants/colorTheme";
import { TitleText } from "../constants/customFont";

const GameScreen = ({ onStartGame }) => {
  const [inputBoxValue, setInputBoxValue] = useState("");
  const [confirmValue, setConfirmValue] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  let confirmOutput;

  const handleInputBoxValue = (inputValue) => {
    setInputBoxValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const handleConfirmButton = () => {
    let verifySelectedValue = parseInt(inputBoxValue);

    if (
      isNaN(verifySelectedValue) ||
      verifySelectedValue > 99 ||
      verifySelectedValue <= 0
    ) {
      Alert.alert("Invalid Number", "Number has been between 1 to 99 ", [
        {
          text: "okay",
          style: "destructive",
          onPress: () => setInputBoxValue(""),
        },
      ]);
      Keyboard.dismiss();
      return;
    }
    setSelectedValue(verifySelectedValue);
    setConfirmValue(true);
    setInputBoxValue("");
    Keyboard.dismiss();
  };

  if (confirmValue) {
    confirmOutput = (
      <View style={styles.confirmBoxStyle}>
        <ConfirmValueBox style={styles.rootConfirmBoxContainer}>
          <Text style={styles.confirmBoxTextStyle}>You Selected</Text>
          <ConfirmValueBox style={{ borderWidth: 3, borderRadius: 50 }}>
            <Text>{selectedValue}</Text>
          </ConfirmValueBox>
          <View style={styles.confirmBoxSubmitStyle}>
            <Button
              title="Start Game"
              onPress={() => {
                onStartGame(selectedValue);
              }}
            />
          </View>
        </ConfirmValueBox>
      </View>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.rootGameScreenContainer}>
        <Card style={styles.cardContainer}>
          <View style={styles.cardStyle}>
            <TitleText style={styles.cardTitle}>Select A Number</TitleText>
            <Input
              style={styles.cardTextInput}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={handleInputBoxValue}
              value={inputBoxValue}
            />
            <View style={styles.buttonContainer}>
              <Button
                color={colorTheme.mainThemeColor}
                title="cancel"
                onPress={() => setInputBoxValue("")}
              />
              <Button title="confirm" onPress={() => handleConfirmButton()} />
            </View>
          </View>
        </Card>
        {/* {selectedValue ? confirmOutput : <Text></Text>} */}
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 30,
  },
  cardTitle: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  cardTextInput: {
    height: 40,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  rootConfirmBoxContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    elevation: 4,
    alignItems: "center",
    marginHorizontal: 60,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 20,
    borderRadius: 30,
  },
  confirmBoxStyle: {},
  confirmBoxTextStyle: {
    fontSize: 20,
    marginVertical: 8,
  },
  confirmBoxSubmitStyle: {
    marginVertical: 10,
  },
});

export default GameScreen;
