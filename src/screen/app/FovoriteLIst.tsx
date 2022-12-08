import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect } from "react";
import FullModal from "../../components/Modal/FullModal";
import { AppConfigContex } from "../../context/Context";
import { useNavigation } from "@react-navigation/native";
import { NavigateTipe } from "../../ts/types";
import { FlatList } from "react-native-gesture-handler";

export default function FovoriteLIst() {
  const { setAddFavotito, addFavotito } = useContext(AppConfigContex);
  const Navigation = useNavigation<NavigateTipe>();

  return (
    <View>
      <FullModal  menu={true}   text="favorito">
        {addFavotito.length === 0 ? (
          <View style={styles.mesage}>
            <Text style={styles.text}>
              No as agregado nada a favoritos , por favor agregué algo a
              favorito
            </Text>
          </View>
        ) : (
          <FlatList
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "center" }}
            data={addFavotito}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  Navigation.navigate("PreviwScreen", {
                    id: item.id,
                    episode: item.episode,
                    synopsis: item.synopsis,
                    type: item.type,
                    rating: item.rating,
                    genres: item.genres,
                    poster: item.poster,
                    name: item.name,
                    debut: item.debut,
                  })
                }
                style={styles.ContainerAnime}
              >
                <View style={styles.imagenContainer}>
                  <Image style={styles.img} source={{ uri: item.poster }} />
                </View>
                <Text numberOfLines={2} style={styles.name}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </FullModal>
    </View>
  );
}

const styles = StyleSheet.create({
  mesage: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 100,
    width: "90%",
  },
  container: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingBottom: 20,
    height: "100%",
  },

  ContainerAnime: {
    width: 115,
    margin: 5,
    marginBottom: 5,
  },

  imagenContainer: {
    width: 115,
    height: 178,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 7,
    backgroundColor: "#111",
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
