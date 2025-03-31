import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

const imgEllipse = require("./assets/images/Ellipse.png");
const shapeImg = require("./assets/images/shape2.png");
const clockImg = require("./assets/images/clock.png");
const crossImg = require("./assets/images/cross.png");

const DashBoard = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.mainContainer}>
      {/* Dashboard header container */}
      <View style={styles.dashboardContainer}>
        <Image source={shapeImg} />
        <Image source={imgEllipse} style={styles.dashboardImg} />
        <Text style={styles.dashboardWelcome}>Welcome Jeegar goyani</Text>
      </View>

      <Text style={styles.greet}>Good Afternoon</Text>

      <Image source={clockImg} style={styles.dashboardClock} />
      <Text style={styles.titleTask}>Task list</Text>

      <View style={styles.tasklistContainer}>
        <View style={styles.taskheading}>
          <Text style={styles.TxtDailyTask}>Daily Task</Text>
          <Image source={crossImg} />
        </View>

        {/* Checkboxes */}
        <View style={styles.chkboxSection}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.paragraph}>Learning Programming by 12PM</Text>
        </View>
        <View style={styles.chkboxSection}>
          <Checkbox
            style={styles.checkbox}
            // value={isChecked}
            // onValueChange={}
          />
          <Text style={styles.paragraph}>Learn how to cook by 1PM</Text>
        </View>
        <View style={styles.chkboxSection}>
          <Checkbox
            style={styles.checkbox}
            // value={isChecked}
            // onValueChange={setChecked}
          />
          <Text style={styles.paragraph}>Learn how to play at 2PM</Text>
        </View>
        <View style={styles.chkboxSection}>
          <Checkbox
            style={styles.checkbox}
            // value={isChecked}
            // onValueChange={setChecked}
          />
          <Text style={styles.paragraph}>Have lunch at 4PM</Text>
        </View>
        <View style={styles.chkboxSection}>
          <Checkbox
            style={styles.checkbox}
            // value={isChecked}
            //onValueChange={setChecked}
          />
          <Text style={styles.paragraph}>Going to travel 6PM</Text>
        </View>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F0F4F3",
  },
  dashboardImg: {
    textAlign: "center",
    margin: "auto",
    marginTop: 30,
  },
  dashboardContainer: {
    backgroundColor: "#50C2C9",
  },
  dashboardWelcome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginVertical: 16,
  },
  greet: {
    textAlign: "right",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 25,
    marginTop: 16,
  },
  dashboardClock: {
    textAlign: "center",
    margin: "auto",
    marginTop: 20,
  },
  titleTask: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginHorizontal: 25,
  },
  tasklistContainer: {
    marginTop: 15,
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingBottom: 30,
    marginHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  taskheading: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 230,
    marginHorizontal: 24,
    marginBottom: 20,
  },
  TxtDailyTask: {
    fontSize: 12,
    fontWeight: "bold",
  },

  chkboxSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: "bold",
  },

  checkbox: {
    marginHorizontal: 9,
    marginVertical: 4,
  },
});
