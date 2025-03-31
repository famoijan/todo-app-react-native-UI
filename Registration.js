import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const RegImg = require("./assets/images/shape.png");

const Registration = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Image source={RegImg} />

      <Text style={styles.contentTitle}>Welcome to Onboard! </Text>
      <Text style={styles.description}>Let’s help to meet up your tasks.</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your full name" style={styles.input} />
        <TextInput placeholder="Enter your Email" style={styles.input} />
        <TextInput placeholder="Enter Password" style={styles.input} />
        <TextInput placeholder="Confirm password" style={styles.input} />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}> Register</Text>
      </TouchableOpacity>

      <Text style={styles.footerDesign}>
        Already have an account ?{" "}
        <Text style={[styles.signIText, { textDecorationLine: "none" }]}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F4F3",
  },

  contentTitle: {
    marginTop: 65,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  description: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 112,
  },
  inputContainer: {
    marginTop: 90,
    paddingHorizontal: 24,
    gap: 30,
  },
  input: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },

  buttonContainer: {
    backgroundColor: "#50C2C9",
    marginHorizontal: 25,
    marginTop: 30,
    borderRadius: 8,
    paddingVertical: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontsize: 18,
  },
  footerDesign: {
    marginTop: 20,
    textAlign: "center",
    fontsize: 16,
    cursor: "pointer",
  },
  signIText: {
    color: "#50C2C9",
    fontsize: 16,
  },
});
