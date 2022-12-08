import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { GeneresList } from "../../../constants/Constants";
import { Styles } from "../../../styles/Styles";
import { naviagtion, NavigateTipe } from "../../../ts/types";
import { useNavigation } from "@react-navigation/native";

export default function Generes() {
  const Navigation = useNavigation<NavigateTipe>();
  return (
    <View style={styles.constainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item, index) => index as any}
        data={GeneresList}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              Navigation.navigate("Generes", { Generes: item.name })
            }
            style={styles.containerBottom}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    marginLeft: 10,
  },
  containerBottom: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

    backgroundColor: Styles.colors.color,
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },

  text: {
    color: Styles.colors.blanco,
    textTransform: "capitalize",
  },
});
