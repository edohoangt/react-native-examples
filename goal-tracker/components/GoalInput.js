import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
  ScrollView,
} from "react-native";

const goalImage = require("../assets/images/goal.png");

function GoalInput(props) {
  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText("");
  }

  const [goalText, setGoalText] = useState("");

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <ScrollView> */}
        <Image source={goalImage} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            {/* cannot change style of button directly, wrap them inside a view as a workaround or build a custom button */}
            <Button title="Add goal" onPress={addGoalHandler} color="#0013c1" />
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#e28372",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#7FCDEE",
    backgroundColor: "#7FCDEE",
    width: "70%",
    padding: 16,
    width: "100%",
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
