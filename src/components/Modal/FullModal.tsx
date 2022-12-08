import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Styles } from "../../styles/Styles";
import Constans from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type Props = {
  text: string;
  children: JSX.Element | JSX.Element[];
  menu: boolean;
};

export default function FullModal({
  text = "accion",
  children,
  menu = true,
}: Props) {
  const Navigate = useNavigation();

  return (
    <View style={styles.body}>
      <LinearGradient
        colors={["#243337", "transparent"]}
        style={styles.gradient}
      />
      {menu ? (
        <View style={styles.arrows}>
          <TouchableOpacity onPress={() => Navigate.goBack()}>
            <Entypo name="chevron-small-left" size={35} color="white" />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.text}>
            {text}
          </Text>
        </View>
      ) : null}

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  arrows: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: Constans.statusBarHeight + 10,
    marginBottom: 20,
  },

  body: {
    backgroundColor: Styles.dacrkColor.color,
    height: "100%",
  },

  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  gradient: {
    width: "100%",
    height: "50%",
    position: "absolute",
    top: 0,
  },
});
