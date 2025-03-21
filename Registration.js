import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
const shapeImg = require("./assets/images/shape.png");

const Registration = () => {
  return (
    <View>
      <Image source={shapeImg} />
      <View style={styles.textContainer}>
        <Text style={styles.contentTitle}>Welcome to Onboard! </Text>
        <Text style={styles.description}>
          Let’s help to meet up your tasks.
        </Text>
      </View>
      <View style={{ padding: 27 }}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Enter your full name" style={styles.input} />
          <TextInput placeholder="Enter your Email" style={styles.input} />
          <TextInput placeholder="Enter Password" style={styles.input} />
          <TextInput placeholder="Confirm password" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}> Register</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <Text> */}
        <Text
          onPress={() => Linking.openURL("")}
          style={styles.signInContainer}
        >
          Already have an account ?<Text style={styles.signIText}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  textContainer: {
    margin: "auto",
    marginTop: 65,
  },
  contentTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 31,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 112,
  },
  input: {
    borderWidth: 1,
    fontSize: 13,
    paddingVertical: 15,
    paddingLeft: 25,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    height: 50,
    maxwidth: 380,
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    backgroundColor: "#50C2C9",
    marginTop: 53,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontsize: 18,
    color: "white",
  },
  signInContainer: {
    textAlign: "center",
    fontsize: 16,
    cursor: "cursor",
  },
  signIText: {
    color: "#50C2C9",
    fontsize: 16,
  },
});
