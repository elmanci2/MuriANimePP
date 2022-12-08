import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import FullModal from "../../components/Modal/FullModal";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "../../styles/Styles";
import { Entypo, AntDesign } from "@expo/vector-icons";
import useFetch from "../../hook/useFetch";
import { useNavigation } from "@react-navigation/native";
import { NavigateTipe } from "../../ts/types";

export default function SearchScree() {
  const [detText, setdetText] = useState("");

  const { data ,  loading } = useFetch(`buscar/${detText}`);


  console.log({data , detText});
  

  const Navigation = useNavigation<NavigateTipe>();

  return (
    <View>

      <FullModal menu={false} text="buscar">
        <SafeAreaView>
          <View style={styles.containerINput}>
            <TouchableOpacity style={[styles.clear, { marginRight: 10 }]}>
              <Entypo name="chevron-down" size={27} color="white" />
            </TouchableOpacity>
            <TextInput
        /*       value={detText === " " ? detText : null as any } */
              onChangeText={(t) =>
                setTimeout(() => {
                  setdetText(t);
                }, 3000)
              }
              style={styles.input}
              placeholderTextColor={"grey"}
              cursorColor="rgb(0, 182, 206)"
              placeholder="hola"
              autoFocus={true}
            />
            <TouchableOpacity
              style={styles.clear}
              onPress={() =>
                setTimeout(() => {
                  setdetText(" ");
                }, 1000)
              }
            >
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>


    {/*     {detText === "" || " " ? (
          <Text></Text> */}
{/*         ) : ( */}
          <FlatList
          columnWrapperStyle={{justifyContent:"center"}}
            numColumns={3}
            data={data}
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
 {/*        )} */}
      </FullModal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerINput: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10,
  },

  input: {
    backgroundColor: Styles.dacrkColor.color,
    width: "70%",
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 7,
    paddingLeft: 20,
    fontWeight: "500",
    color: "white",
  },

  clear: {
    backgroundColor: Styles.dacrkColor.color,
    padding: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginLeft: 10,
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
