import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import CupertinoSwitch from "../components/CupertinoSwitch";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithAddButton
        title="Smart"
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <View style={styles.textInputRow}>
        <TextInput placeholder="Active" style={styles.textInput}></TextInput>
        <View style={styles.textInputFiller}></View>
        <CupertinoSwitch style={styles.cupertinoSwitch}></CupertinoSwitch>
      </View>
      <TextInput placeholder="Products" style={styles.textInput2}></TextInput>
      <TextInput
        placeholder="Sample  Project"
        style={styles.placeholder}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 366,
    marginTop: 61,
    alignSelf: "center"
  },
  textInput: {
    fontFamily: "roboto-700",
    color: "#121212",
    width: 109,
    height: 39,
    fontSize: 22
  },
  textInputFiller: {
    flex: 1,
    flexDirection: "row"
  },
  cupertinoSwitch: {
    width: 45,
    height: 23,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 8
  },
  textInputRow: {
    height: 39,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 39,
    marginRight: 14
  },
  textInput2: {
    fontFamily: "roboto-italic",
    color: "#121212",
    width: 106,
    height: 41,
    fontSize: 25,
    textAlign: "center",
    marginTop: 59,
    marginLeft: 134
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 87,
    width: 275,
    marginTop: 73,
    marginLeft: 63
  }
});

export default Untitled;
