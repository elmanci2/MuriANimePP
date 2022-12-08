import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { naviagtion } from "../../ts/types";
import FullModal from "../../components/Modal/FullModal";
import GridFlatlistANime from "../../components/SliderAnime/GridFlatlistANime";

export default function GeneresScreen({ route, navigation }: naviagtion) {
  const { Generes } = route.params;

  return (
    <View>
    <FullModal text={Generes} >
        <GridFlatlistANime genere={Generes}  />
    </FullModal>
    </View>
  );
}

