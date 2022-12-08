import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NavigateTipe } from "../../ts/types";
import { useInfiniteQuery, useQuery } from "react-query";
import ActivitiIdicator from "../minicomponets/ActivitiIdicator";
import ErrorScreen from "../../screen/app/err/ErrorScreen";

interface generos {
  genere: string;
}

export default function GridFlatlistANime({ genere = "accion" }: generos) {
  const Navigation = useNavigation<NavigateTipe>();

  const [page, setPage] = useState(1);

  const getInfo = async ({ pageParam = 1 }) => {
    const res = await fetch(
      `https://kirianime.fly.dev/generos/${genere}/default/${page}`
    );
    const data = await res.json();
    return data.animes;
  };

  const { isLoading, isError, data, error, fetchNextPage, hasNextPage,  } =
    useInfiniteQuery(
      ["peticion" ,genere ],
      getInfo,

      {
        getNextPageParam: (lastPage) => {
          if (lastPage.next !== null) {
            return lastPage.next;
          }

          return lastPage;
        },
      }
    );

  if (isLoading) {
    return <ActivitiIdicator />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        onEndReached={() =>setPage(page +  1 )}
        onEndReachedThreshold={0.3}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "center" }}
        data={data.pages?.map((page) => page).flat()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              Navigation.navigate("PreviwScreen", {
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
            style={styles.ContainerAnime}
          >
            <View style={styles.imagenContainer}>
              <Image style={styles.img} source={{ uri: item.poster }} />
            </View>
            <Text numberOfLines={2} style={styles.name}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
