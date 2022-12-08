import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const test = [
  {
    id: 1,
    img: "https://media.vandal.net/i/1280x720/96054/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-20218111174875_1.jpg",
    name: "demo slayer ",
    capitulo: 10,
  },

  {
    id: 1,
    img: "https://media.vandal.net/i/1280x720/96054/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-20218111174875_1.jpg",
    name: "demo slayer ",
    capitulo: 10,
  },

  {
    id: 1,
    img: "https://media.vandal.net/i/1280x720/96054/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-20218111174875_1.jpg",
    name: "demo slayer ",
    capitulo: 10,
  },

  {
    id: 1,
    img: "https://media.vandal.net/i/1280x720/96054/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-20218111174875_1.jpg",
    name: "demo slayer ",
    capitulo: 10,
  },

  {
    id: 1,
    img: "https://media.vandal.net/i/1280x720/96054/demon-slayer-kimetsu-no-yaiba-the-hinokami-chronicles-20218111174875_1.jpg",
    name: "demo slayer ",
    capitulo: 10,
  },
];

export default function HomeSwiper() {
  return (
    <FlatList
      horizontal
      contentContainerStyle={{ width: "100%", height: 200 }}
      data={test}
    /*   keyExtractor={(item, index) => index as any} */
      renderItem={({ item }) => (
        <View style={{ width: "98%", height: 200 ,  }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={{ uri: item.img }}
          />
        </View>
      )}
    />
  );
}
