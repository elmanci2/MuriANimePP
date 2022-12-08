import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import { getInfo } from "../../hook/getInfo";
import { Text } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { NavigateTipe } from "../../ts/types";



interface SliderAnime {
  data: [];
  text: string;
}

export default function AnimeSlider() {
  const { isLoading, isError, data, error } = useQuery(["peticion"], getInfo);

  const navigate = useNavigation<NavigateTipe>();

  return (
    <View>
      <Text style={styles.text}> anime </Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigate.navigate("PreviwScreen", {
                id: item.id,
                episode: item.episodes,
                synopsis: item.synopsis,
                type: item.type,
                rating: item.rating,
                genres: item.genres,
                poster: item.poster,
                name: item.title,
                debut: item.debut,
              })
            }
            style={{ width: 120, marginRight: 3 }}
          >
            <View style={styles.containerAnime}>
              <Image style={styles.img} source={{ uri: item.poster }} />
            </View>
            <Text numberOfLines={2} style={styles.textPoster}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAnime: {
    width: 115,
    height: 170,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  text: {
    marginTop: 20,
    color: "white",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: 20,
    marginBottom: 7,
  },

  img: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },

  textPoster: {
    color: "white",
    textAlign: "center",
    paddingHorizontal: 2,
  },
});
