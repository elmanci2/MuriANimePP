import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

export default function Menu() {
  return (
    <View style={styles.menucontainer}>
      <Text>Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menucontainer: {
    position: "absolute",
    top: 0,
    zIndex: 2,
    width: "100%",
    backgroundColor: "rgba(18, 27, 28, 0.375)",
    height: Constants.statusBarHeight * 3,
  },
});
