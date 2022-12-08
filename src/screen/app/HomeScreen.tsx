import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "../../styles/Styles";
import { LinearGradient } from "expo-linear-gradient";
import Banner from "../../components/Banner/Banner";
import Generes from "../../components/Banner/generes/Generes";
import AnimeSlider from "../../components/SliderAnime/AnimeSlider";

export default function HomeScreen() {
  return (
    <FlatList
      contentContainerStyle={{ height: "100%" }}
      data={[]}
      renderItem={({ item }) => <></>}
      ListHeaderComponent={HomeItems}
      ListFooterComponent={FooterConted}
    />
  );
}



const HomeItems = () => {
  return (
    <View style={styles.body}>
      <Banner />
      <Generes />
      <AnimeSlider />
    </View>
  );
};

const FooterConted = () => {
  return (
    <View>
      <AnimeSlider />
      <AnimeSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    backgroundColor: Styles.dacrkColor.color,
  },

  gradients: {
    top: 0,
    width: "100%",
    height: "100%",
  },
});
