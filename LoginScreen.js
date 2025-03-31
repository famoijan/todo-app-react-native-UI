import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const back_to_school = require("./assets/images/back_to_school.png");
const shapeImg = require("./assets/images/shape.png");

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Image source={shapeImg} />

      <Text style={styles.title}>Welcome back</Text>
      <Image source={back_to_school} style={styles.imgLogin} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your Email" style={styles.email} />
        <TextInput placeholder="Enter Password" style={styles.pwd} />
      </View>
      <View>
        <Text style={styles.forgetPassword}> Forget password ?</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard")}
        style={styles.btn}
      >
        <Text style={styles.btnText}> Login</Text>
      </TouchableOpacity>
      <Text style={styles.footerDesign}>
        Don’t have an account ?
        <Text style={[styles.forgetPassword, { textDecorationLine: "none" }]}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#50C2C9",
    marginHorizontal: 25,
    marginTop: 30,
    borderRadius: 8,
    paddingVertical: 16,
  },
  btnText: {
    color: "white",
    fontsize: 18,
    fontWeight: "semibold",
    textAlign: "center",
  },

  mainContainer: {
    flex: 1,
    backgroundColor: "#F0F4F3",
  },
  title: {
    fontsize: 18,
    fontWeight: "bold",
    marginTop: 65,
    textAlign: "center",
  },
  imgLogin: {
    marginHorizontal: "auto",
    marginTop: 30,
  },
  email: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 100,
    marginTop: 87,
  },
  pwd: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 100,
  },
  inputContainer: {
    paddingHorizontal: 24,
    gap: 30,
    marginTop: 15,
  },

  forgetPassword: {
    textAlign: "center",
    color: "#50C2C9",
    marginTop: 48,
    textDecorationLine: "underline",
  },

  footerDesign: {
    fontsize: 16,
    marginTop: 19,
    textAlign: "center",
  },
});
