import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "../../../styles/Styles";
import FullModal from "../../../components/Modal/FullModal";
import { naviagtion } from "../../../ts/types";



const POLICY = [
  {
    // blocks navigation to login page
    url: 'https://github.com/login.*',
  }, {
    // blocks any navigation to url that doesn't contain github.com
    url: '^((?!(github.com)).)*$',
  }
];



export default function ServerScreen({ route, navigation }: naviagtion) {
  const { nameCapi, nsmeAnime, EPid } = route.params;

  return (
    <FullModal text={nsmeAnime}>
      <View style={styles.player}>
        <WebView  originWhitelist={['*']}  style={styles.webWiw} source={{ uri: "https://embedsb.com/e/2illa3uj7e5e.html" }} />
      </View>
    </FullModal>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: Styles.dacrkColor.color,
  },

  player: {
    width: "100%",
    backgroundColor: "white",
    height: "30%",
  },

  webWiw: {
    width: "100%",
    height: "100%",
    backgroundColor:Styles.dacrkColor.color
  },
});
