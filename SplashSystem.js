import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
const heroImg = require("./assets/images/hero.png");
const shapeImg = require("./assets/images/shape.png");

const SplashSystem = () => {
  return (
    <View>
      <Image source={shapeImg} style={styles.shapeImage} />
      <Image source={heroImg} style={styles.heroImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}> Gets things with TODs</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
          Consequat urna quam felis interdum quisque. Malesuada adipiscing
          tristique ut eget sed.
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}> Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashSystem;

const styles = StyleSheet.create({
  shapeImage: {},
  heroImage: {
    textAlign: "center",
    margin: "auto",
    marginTop: 78,
    borderWidth: 2,
    borderColor: "blue",
  },
  contentContainer: {
    borderColor: "red",
    borderWidth: 2,
    maxWidth: 203,
    marginTop: 65,
    margin: "auto",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 16,
  },
  content: {
    textAlign: "center",
    fontsize: 13,
  },
  buttonContainer: {
    backgroundColor: "#50C2C9",
    marginTop: 120,
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "semibod",
    fontsize: 18,
  },
});
