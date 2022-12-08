import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";



export default function Starts({ star }) {
  return (
    <View style={styles.container}>
      {[...new Array(5)].map((e, index) => {
        return index < star ? (
          <AntDesign name="star" size={15} color="#ffbb00" />
        ) : (
          <AntDesign name="staro" size={15} color="#ffbb00" />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
  },
});
