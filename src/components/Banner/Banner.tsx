import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../styles/Styles";
import Menu from "./menu/Menu";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Menu />
      <Image
        style={styles.imagen}
        source={{
          uri: "https://m.media-amazon.com/images/I/61Zm2hsRJ0L._AC_SL1024_.jpg",
        }}
      />

      <View style={styles.gradient}>
        <LinearGradient
          colors={["transparent", Styles.dacrkColor.color]}
          style={styles.linealgradient}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "60%",
    position: "relative",
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  imagen: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  gradient: {
    width: "100%",
    height: "60%",
    position: "absolute",
    bottom: 0,
  },

  linealgradient: {
    top: 0,
    width: "100%",
    height: "100%",
  },
});
