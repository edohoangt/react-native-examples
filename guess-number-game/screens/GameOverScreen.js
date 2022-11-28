import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imgSize = 300;
  if (width < 380) {
    imgSize = 150;
  }
  if (height < 420) {
    imgSize = 100;
  }

  const imgStyle = {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imgStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlightText}> {userNumber}</Text>.
        </Text>
        <PrimaryButton onButtonPress={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%", // of the container
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24, // children Text elems will be affected
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  screen: {
    flex: 1,
  },
});

export default GameOverScreen;
